import express from 'express';
import webpack from 'webpack';
import path from 'path';
import favicon from 'serve-favicon';

import config from '../../webpack.client.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import template from './template';

const app = express();
const port = 8080;
let manifest = null;

app.use(favicon('public/favicon.ico'));
app.use(express.static('public'));
app.use(express.static('dist'));

if (process.env.NODE_ENV === 'development') {
  /** Development mode */
  const compiler = webpack(config);
  const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    headers: { "Access-Control-Allow-Origin": "*" },
    hot: true,
    quiet: true,
    noInfo: true,
    stats: "errors-only",
    logLevel: "silent",
    serverSideRender: true,
  });
  const hotMiddleware = webpackHotMiddleware(compiler);
  app.use(devMiddleware);
  app.use(hotMiddleware);

  app.use((req, res, next) => {
    const filename = path.join(compiler.outputPath, 'manifest.json');
    manifest = JSON.parse(compiler.outputFileSystem.readFileSync(filename, 'utf8'));
    next();
  });
} else {
  /** Production mode */
  manifest = require('../../dist/manifest.json');
}

app.get('/', (req, res) => {
  console.log()
  res.status(200).send(template(manifest));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
