const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('../webpack.config');
const path = require('path');
const port = 9090;

module.exports = Object.assign({}, config, {
  devServer: {
    port,
    contentBase: path.join(__dirname),
    compress: true,
    host: '0.0.0.0',
    publicPath: '/',
  },

  entry: path.join(__dirname, 'app'),

  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './index.html'),
      title: 'Test App',
      inject: true,
    }),
  ],
});
