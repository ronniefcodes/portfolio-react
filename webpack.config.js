const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
  },

  output: {
    filename: '[name].js',
    library: 'portfolio',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },

  mode: 'production',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(jpg|png|gif|svg|eot|ttf|woff|woff2|otf)(\?.*)?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'file-loader',
        options: {
          name: 'media/[name].[ext]'
        }
      }
    ],
  },

  resolve: {
    alias: {
      Components: path.resolve(__dirname, './src/components'),
      Utils: path.resolve(__dirname, './src/utils'),
      Theme: path.resolve(__dirname, './src/theme'),
    },
  },
};
