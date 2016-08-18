import { Button, Radio } from '../../../src/ui';

export default function Flashcard (h, { props, styles }) {
  const showAnswer = Boolean(props.selection);
  return (
    <section className='card' style={props.style}>
      <header className='question'>{props.question}</header>
      <ul className='options'>{props.options.map(option)}</ul>
      {showAnswer && (
        <footer className='footer'>
          <div style={{ marginBottom: '1rem', fontSize: '1.1em' }}>
            <strong>{props.selection === props.answer ? 'Correct! ' : 'Wrong! '}</strong>
            {props.reason}
          </div>
          <h.Button className={styles.Button.primary} onClick={props.onNext}>
            Next question
          </h.Button>
        </footer>
      )}
    </section>
  );

  function option (opt, i) {
    const isSelected = opt === props.selection;
    const good = showAnswer && opt === props.answer && 'good';
    const bad = !good && isSelected && 'bad';

    return h('Option', {
      className: { [good || bad || 'normal']: true, disabled: showAnswer },
      name: 'answer',
      value: i,
      label: opt,
      disabled: showAnswer,
      checked: isSelected,
      onChange: () => props.onChange(opt)
    });
  }
}

Flashcard.propTypes = t => ({
  onChange: t.Function,
  question: t.String,
  options: t.Array,
  answer: t.String.optional(),
  selection: t.String.optional(),
  style: t.Object.optional(),
});

Flashcard.components = {
  Button,
  Option: Radio,
};

Flashcard.styles = (css, { components: { Option } }) => css`
  .card {
    position: relative;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2)
    , 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }

  .card:before {
    pointer-events: none;
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2)
    , 0 8px 0 -3px #f6f6f6
    , 0 9px 1px -3px rgba(0, 0, 0, 0.2)
    , 0 16px 0 -6px #f6f6f6
    , 0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }

  .question {
    font-size: 1.4em;
    line-height: 1.4;
    padding: 1.5rem;
    color: inherit;
    box-sizing: border-box;
    border-bottom: 1px solid #ededed;
    font-smoothing: antialiased;
  }

  .options {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .option extends ${Option.container} {
    font-size: 1.2em;
  }

  .disabled > input {
    visibility: hidden;
  }

  .normal:not(.disabled):hover {
    background-color: #ededed;
    cursor: pointer;
  }

  .bad extends .normal {
    background-color: #FFCFCF;
    cursor: default;
  }

  .good extends .normal {
    background-color: #D4FCD2;
    cursor: default;
  }

  .normal > label {
    line-height: 2;
  }

  .footer {
    color: #777;
    padding: 10px 15px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
  }
`;