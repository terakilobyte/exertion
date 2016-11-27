const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractSass = new ExtractTextPlugin('css/app.css')

const entry = ['./web/static/css/application.scss']

const webpackCSSConfig = {
  devtool: null,
  entry: entry,
  output: {
    path: path.resolve(__dirname) + '/priv/static/css',
    filename: 'css/app.css'
  },
  module: {
    loaders: []
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname) + '/web/static/css']
  },
  plugins: [
    extractSass
  ]
}

webpackCSSConfig.module.loaders.push({
  test: /\.scss$/,
  exclude: null,
  loaders: [
    'sass-loader',
    extractSass.extract(['css', 'sass'])
  ]
})

module.exports = webpackCSSConfig
