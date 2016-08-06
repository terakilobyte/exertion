const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const extractSass = new ExtractTextPlugin('css/app.css')

module.exports = {
  devtool: 'source-map',
  entry: ['./web/static/css/application.scss', './web/static/js/app.js'],
  output: {
    path: './priv/static',
    filename: 'js/app.js'
  },
  resolve: {
    moduleDirectories: ['node_modules', path.join(__dirname, '/web/static/js')]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel'],
        include: __dirname,
        query: {
          presets: ['es2015']
        }
      }, {
        test: /\.scss$/,
        loader: extractSass.extract(['css', 'sass'])
      }
    ]
  },
  plugins: [
    extractSass,
    new CopyWebpackPlugin([{from: './web/static/assets'}])
  ]
}
