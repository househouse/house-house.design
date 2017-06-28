var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, './src/assets/js/'),
    publicPath: '/src/assets/js/',
    filename: 'main.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
