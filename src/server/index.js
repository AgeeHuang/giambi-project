import express from 'express';
import webpack from 'webpack';
import config from '../../webpack.client.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import template from './template';

const app = express();
const port = 8080;

if (process.env.NODE_ENV === 'development') {
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
}

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res
    .status(200)
    .send(template());
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
