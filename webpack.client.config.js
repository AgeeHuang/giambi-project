const webpack = require('webpack');
const path = require("path");
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  target: 'web',
  mode: 'development',
  entry: {
    client: [
      'webpack-hot-middleware/client',
      './src/client/index.tsx',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.html', '.tsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ManifestPlugin(),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify('development'),
        },
      },
    }),
  ],
  stats: {
    colors: true,
    modules: false,
    children: false
  },
  performance: {
    hints: false
  },
}
