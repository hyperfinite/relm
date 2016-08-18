import _ from 'lodash';
import Flashcard from './Flashcard';

export default function Quiz (h, { styles, actions, state }) {
  const question = getQuestion(state);
  if (!question) return null;

  const stats = _.reduce(state.stats, summarizeStats, {});
  const toggles = _.map(state.topics, topicToToggleButton);

  if (!state.topic) return null;

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', color: '#c2c2c2', fontSize: '1.6em' }}>
        {_.get(state.topics, [state.topic, 'label'], '')}
      </h1>
      <h.Flashcard
        style={{ margin: '1rem 0 3rem' }}
        question={question.q}
        reason={question.r}
        answer={_.first(question.o)}
        options={state.options}
        selection={state.selection}
        onChange={actions.updateSelection}
        onNext={actions.nextQuestion}
      />
      <nav style={{ lineHeight: 2.5, textAlign: 'center' }}>{toggles}</nav>
    </div>
  );

  function topicToToggleButton (topic, key) {
    const num = _.size(topic.questions);
    const stat = stats[key] || {};
    return (
      <h.Toggle
        className={{ [styles.Toggle.active]: !state.skippedTopics[key] }}
        count={`${stat.score || 0} / ${stat.attempts || 0}`}
        label={`${topic.label} (${num})`}
        onToggle={() => actions.toggleTopic(key)}
      />
    );
  }
}

Quiz.components = {
  Toggle,
  Flashcard,
};

Quiz.actions = {
  initializeState (state) {
    return state.merge({ question: null, skippedTopics: {}, stats: [] });
  },

  nextQuestion: selectNextQuestion,

  toggleTopic (state, topicId) {
    // When a topic is being hidden, first check that it is not the last visibe one
    if (!state.skippedTopics[topicId]) {
      const remaining = _.omitBy(state.topics, (it, id) => state.skippedTopics[id]);
      if (_.size(remaining) < 2) return state;
    }

    const update = state.set(['skippedTopics', topicId], !state.skippedTopics[topicId]);
    return selectNextQuestion(update);
  },

  updateTopics (state, topics) {
    // Build initial stats objects
    const stats = _.reduce(topics, reduceTopicToStats, []);

    return selectNextQuestion(state.update({
      topics: { $set: topics },
      stats: { $set: stats },
    }));

    // Reducer for all topics which builds the stats array
    function reduceTopicToStats (arr, topic, topicName) {
      const topicStats = _.map(topic.questions, mapQuestionToStat(topicName));
      return arr.concat(topicStats);
    }

    // Iteratee for each question which return the initial stat object
    function mapQuestionToStat (topicName) {
      return (__, questionName) => ({
        topic: topicName,
        question: questionName,
        score: 0,
        attempt: 0,
      });
    }
  },

  updateSelection (state, value) {
    const question = getQuestion(state);
    const isCorrect = _.first(question.o) === value;

    const stats = reduceStats(state.stats, {
      question: state.question,
      topic: state.topic,
      score: isCorrect ? 1 : -1,
    });

    return state.update({
      selection: { $set: value },
      stats: { $set: stats }
    });
  },
};

function Toggle (h, { props, styles }) {
  return (
    <a className={[styles.tag, props.className]} onClick={props.onToggle}>
      <span className={styles.count}>{props.count}</span>
      <span className={styles.label}>{props.label}</span>
    </a>
  );
}

Toggle.styles = (css) => css`
  .heading {
    text-align: center;
  }

  .tag {
    background-color: #eeeeee;
    border-radius: 16px;
    padding: 4px 1em 4px 0;
    transition: background-color 0.4s;
    white-space: nowrap;
    display: inline-block;
    line-height: 1;
    margin-right: 1rem;
  }

  .active {
    background-color: #90caf9;
  }

  .label {
    margin-left: 0.5em;
  }

  .count {
    background-color: #ffe0b2;
    border-radius: 16px;
    padding: 3px 8px;
  }
`;

/*
 *
 * Internals
 *
 */

function getQuestion (state) {
  return _.get(state, ['topics', state.topic, 'questions', state.question]);
}

// NOTE: selectQuestion assumes that an entry exists for each
// topic+question in the stats array. On init, call this function
// with each topic+question+score of 0
function reduceStats (stats = [], { topic, question, score }) {
  // Remove old value, if any
  const clone = _.clone(stats);
  const prevIndex = _.findIndex(clone, it => it.topic === topic && it.question === question);
  const [prev] = clone.splice(prevIndex, 1);

  const value = {
    topic,
    question,
    score: Math.max(-1, prev.score + score),
    time: Date.now(),
    attempt: 1
  };

  // Add new value
  const nextIndex = _.sortedLastIndexBy(clone, value, it => it.score);
  clone.splice(nextIndex, 0, value);

  return clone;
}

function summarizeStats (obj, { topic, score, attempt }) {
  const stat = obj[topic] = obj[topic] || { attempts: 0, score: 0 };
  stat.score = stat.score + score;
  stat.attempts = stat.attempts + (attempt || 0);
  return obj;
}

function weakestStatByTopic (stats = []) {
  return topic => {
    // Separate topic stats into two arrays 'bad or never answer' and 'good'
    const { good, bad } = _.reduce(stats, (partition, x) => {
      if (x.topic !== topic) return partition;
      if (x.score < 1) partition.bad.push(x);
      else partition.good.push(x);
      return partition;
    }, { good: [], bad: [] });

    if (bad.length) return _.sample(bad);
    return _.first(good);
  };
}

function skipTopics (skippedTopics = {}) {
  return (topics) => _.omitBy(topics, (t, k) => skippedTopics[k]);
}

function getWeakestTopic (state) {
  const findWeakest = _.flow(
    skipTopics(state.skippedTopics),    // => Obj
    _.keys,                             // => [Str]
    _.sample,                           // => Str
    weakestStatByTopic(state.stats)     // => Obj
  );

  return findWeakest(state.topics);
}

function selectNextQuestion (state) {
  const weakest = getWeakestTopic(state);
  const question = _.get(state, ['topics', weakest.topic, 'questions', weakest.question]);

  return state.merge({
    topic: weakest.topic,
    question: weakest.question,
    options: _.shuffle(question.o),
    selection: null
  });
}

/* export for testing */
export const internals = {
  reduceStats,
  summarizeStats,
  skipTopics,
  weakestStatByTopic,
  getWeakestTopic,
};