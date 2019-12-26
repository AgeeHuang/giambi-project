const webpack = require('webpack');
const path = require("path");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  target: 'web',
  mode: 'production',
  entry: {
    client: [
      './src/client/index.tsx',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  devtool: 'source-map',
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
          MiniCssExtractPlugin.loader,
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
    new webpack.optimize.ModuleConcatenationPlugin(),
    new MinifyPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: '[id].css',
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
