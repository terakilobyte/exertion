const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const extractSass = new ExtractTextPlugin('css/app.css')
const webpack = require('webpack')
const env = process.env.MIX_ENV || 'dev'
const prod = env || 'dev'

let plugins = [
  extractSass,
  new CopyWebpackPlugin([{from: './web/static/assets'}]),
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    __PROD__: prod,
    __DEV__: env === 'dev'
  })
]

const entry = ['./web/static/css/application.scss', './web/static/js/app.js']

module.exports = {
  devtool: 'source-map',
  entry: entry,
  output: {
    path: path.resolve(__dirname) + '/priv/static/',
    filename: 'js/app.js'
  },
  resolve: {
    moduleDirectories: ['node_modules', path.join(__dirname, '/web/static/js/src')],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel'],
        exlude: path.resolve(__dirname, 'node_modules'),
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.scss$/,
        loader: extractSass.extract(['css', 'sass']),
      }, {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  plugins
}
