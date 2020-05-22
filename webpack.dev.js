const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'none', //for more readable main.js
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
});
