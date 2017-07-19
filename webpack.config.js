const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  devtool: '#inline-source-map',
  entry: {
	  app: './index.js'
  },
  output: {
	  path: path.resolve(__dirname, './dist'),
	  filename: 'content.js'
  }
};