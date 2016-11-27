const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const extractSass = new ExtractTextPlugin('css/app.css')
const webpack = require('webpack')
const env = process.env.MIX_ENV || 'dev'
const prod = env || 'dev'

process.env['SASS_PATH'] = path.resolve(__dirname) + 'web/static/css'
console.log('we are in ' + prod + 'mode')
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

const publicPath = 'http://localhost:4001/'
const entry = ['./web/static/css/application.scss', './web/static/js/app.js']
const hot = 'webpack-hot-middleware/client?path=' + publicPath + '__webpack_hmr'
if (prod === 'dev') {
  entry.unshift(hot)
}

if (env === 'dev') {
  console.log('webpack building in dev mode')
  plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = {
  devtool: prod !== 'dev' ? null : 'source-map',
  entry: entry,
  output: {
    path: path.resolve(__dirname) + '/priv/static/js',
    filename: 'app.js',
    publicPath: publicPath
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
        loaders: ['babel'],
        exlude: /node_modules/,
        include: path.join(__dirname, 'web/static/js/')
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
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
  sassLoader: {
    includePaths: [path.resolve(__dirname) + '/web/static/css']
  },
  plugins
}
