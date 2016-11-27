const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const extractSass = new ExtractTextPlugin('css/app.css')
const webpack = require('webpack')
const env = process.env.MIX_ENV || 'dev'
const prod = env || 'dev'
const cssnano = require('cssnano')

process.env['SASS_PATH'] = path.resolve(__dirname) + 'web/static/css'
console.log('we are in ' + prod + 'mode')

const babelQuery = {
  cacheDirectory: true,
  plugins: ['transform-runtime'],
  presets: ['es2015', 'react', 'stage-0']
}

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
const entry = ['./web/static/js/app.js']
const hot = 'webpack-hot-middleware/client?path=' + publicPath + '__webpack_hmr'
if (prod === 'dev') {
  entry.unshift(hot)
}

if (env === 'dev') {
  console.log('webpack building in dev mode')
  plugins.push(new webpack.HotModuleReplacementPlugin())
}

const webpackConfig = {
  devtool: prod !== 'dev' ? null : 'source-map',
  entry: entry,
  output: {
    path: path.resolve(__dirname) + '/priv/static',
    filename: 'js/app.js',
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
        loader: 'babel',
        exlude: /node_modules/,
        include: path.join(__dirname, 'web/static/js/'),
        query: babelQuery
      },
      {
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

// ------------------------------------
// Style Loaders
// ------------------------------------
// We use cssnano with the postcss loader, so we tell
// css-loader not to duplicate minimization.
const BASE_CSS_LOADER = 'css?sourceMap&-minimize'

webpackConfig.module.loaders.push({
  test    : /\.scss$/,
  exclude : null,
  loaders : [
    'style',
    BASE_CSS_LOADER,
    'postcss',
    'sass?sourceMap'
  ]
})

webpackConfig.module.loaders.push({
  test    : /\.css$/,
  exclude : null,
  loaders : [
    'style',
    BASE_CSS_LOADER,
    'postcss'
  ]
})

webpackConfig.postcss = [
  cssnano({
    autoprefixer : {
      add      : true,
      remove   : true,
      browsers : ['last 2 versions']
    },
    discardComments : {
      removeAll : true
    },
    discardUnused : false,
    mergeIdents   : false,
    reduceIdents  : false,
    safe          : true,
    sourcemap     : true
  })
]

module.exports = webpackConfig
