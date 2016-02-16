import _ from 'lodash';
import webpack from 'webpack';
import DevServer from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { isAbsolute, resolve as resolvePath } from 'path';

const serverHost = 'localhost';
const serverPort = 8080;

export function getPath (basePath = process.cwd()) {
  return (path) => isAbsolute(path) ? path : resolvePath(basePath, path);
}

function getHtmlOptions (template, opts) {
  const htmlOptions = {
    title: opts.pageTitle || 'Title missing',
    filename: 'index.html',
    inject: 'body',
  };

  if (!template) return htmlOptions;

  if (_.includes(template, '<')) {
    // If html template is provided
    htmlOptions.templateContent = template;
  } else {
    // If path to html template is provided
    htmlOptions.template = getPath(opts.workingDirectory)(template);
  }

  return htmlOptions;
}

export function getHtml (entry, template, opts) {
  const htmlOptions = getHtmlOptions(template, opts);

  if (!_.isPlainObject(entry)) {
    return [new HtmlWebpackPlugin(htmlOptions)];
  }

  return _.reduce(entry, (files, __, name) => {
    const copy = _.clone(htmlOptions);
    copy.chunks = ['common', name];
    copy.title = [copy.title, name].join(' | ');
    copy.filename = `${name}.html`;

    files.push(new HtmlWebpackPlugin(copy));
    return files;
  }, []);
}

export function getAssets (assets = [], opts) {
  const resolveFromCwd = getPath(opts.workingDirectory);
  return _.map(assets, (asset) => _.extend(asset, {
    to: resolveFromCwd(asset.to),
    from: resolveFromCwd(asset.from),
  }));
}

export function getPlugins (plugins = [], mode, opts) {
  // Common plugins
  plugins.push(
    new webpack.ProvidePlugin(opts.globals || {}),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(mode) }),
    new CopyWebpackPlugin(getAssets(opts.assets, opts)),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js'
    }),

    // Create html files (multiple for multiple chunks)
    ...getHtml(opts.entry, opts.template, opts)
  );

  // Hot module replacement
  if (mode === 'hot') {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  // Development mode plugins can be added here
  if (mode !== 'production') {
    return plugins;
  }

  // Production only plugins
  plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  );

  return plugins;
}

export function getLoaders (loaders = []/*, opts*/) {
  loaders.push(
    // Add common loaders here (css, etc.)
  );

  return loaders;
}

export function getEntry (entry = {}, mode) {
  if (mode === 'production') return entry;

  const webpackEntries = [
    `webpack-dev-server/client?http://${serverHost}:${serverPort}`
  ];

  if (mode === 'hot') {
    webpackEntries.push(`webpack/hot/dev-server`);
  }

  if (_.isPlainObject(entry)) {
    return _.mapValues(entry, x => webpackEntries.concat(x));
  }

  return webpackEntries.concat(entry);
}

export function createBuilder (compiler) {
  return function build (opts = {}) {
    return new Promise(function exec (resolve, reject) {
      compiler(opts, 'production').run((err, stats) => {
        if (err) {
          reject(err);
        } else if (stats.hasErrors()) {
          reject(stats.toString({ colors: true }));
        } else {
          resolve(stats);
        }
      });
    });
  };
}

export function createWatcher (compiler) {
  return function watch (opts = {}, mode = 'development') {
    const base = getPath(opts.workingDirectory)(opts.outputDir);

    const server = new DevServer(compiler(opts, mode), {
      contentBase: base,
      hot: mode === 'hot',
      historyApiFallback: true,
      stats: { colors: true }
    });

    server.listen(serverPort, serverHost, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(
          `Development server started on `
        + `http://${serverHost}:${serverPort}/`
        );
      }
    });
  };
}
