const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const extractSass = new ExtractTextPlugin('css/app.css')
const webpack = require('webpack')
const env = process.env.MIX_ENV || process.env.NODE_ENV || 'dev'
const prod = env || 'dev'
const cssnano = require('cssnano')

process.env['SASS_PATH'] = path.resolve(__dirname) + 'web/static/css'
console.log('we are in ' + prod + ' mode')

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

if (prod === 'prod') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin()
  )
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
  postcss (bundler) {
    return {
      default: [
        cssnano({
          autoprefixer: {
            add: true,
            remove: true,
            browsers: ['last 2 versions']
          },
          discardComments: {
            removeAll: true
          },
          discardUnused: false,
          mergeIdents: false,
          reduceIdents: false,
          safe: true,
          sourcemap: true
        }),
        // Transfer @import rule by inlining content, e.g. @import 'normalize.css'
        // https://github.com/jonathantneal/postcss-partial-import
        require('postcss-partial-import')({ addDependencyTo: bundler }),
        // Allow you to fix url() according to postcss to and/or from options
        // https://github.com/postcss/postcss-url
        require('postcss-url')(),
        // W3C variables, e.g. :root { --color: red; } div { background: var(--color); }
        // https://github.com/postcss/postcss-custom-properties
        require('postcss-custom-properties')(),
        // W3C CSS Custom Media Queries, e.g. @custom-media --small-viewport (max-width: 30em);
        // https://github.com/postcss/postcss-custom-media
        require('postcss-custom-media')(),
        // CSS4 Media Queries, e.g. @media screen and (width >= 500px) and (width <= 1200px) { }
        // https://github.com/postcss/postcss-media-minmax
        require('postcss-media-minmax')(),
        // W3C CSS Custom Selectors, e.g. @custom-selector :--heading h1, h2, h3, h4, h5, h6;
        // https://github.com/postcss/postcss-custom-selectors
        require('postcss-custom-selectors')(),
        // W3C calc() function, e.g. div { height: calc(100px - 2em); }
        // https://github.com/postcss/postcss-calc
        require('postcss-calc')(),
        // Allows you to nest one style rule inside another
        // https://github.com/jonathantneal/postcss-nesting
        require('postcss-nesting')(),
        // Unwraps nested rules like how Sass does it
        // https://github.com/postcss/postcss-nested
        require('postcss-nested')(),
        // W3C color() function, e.g. div { background: color(red alpha(90%)); }
        // https://github.com/postcss/postcss-color-function
        require('postcss-color-function')(),
        // Convert CSS shorthand filters to SVG equivalent, e.g. .blur { filter: blur(4px); }
        // https://github.com/iamvdo/pleeease-filters
        require('pleeease-filters')(),
        // Generate pixel fallback for "rem" units, e.g. div { margin: 2.5rem 2px 3em 100%; }
        // https://github.com/robwierzbowski/node-pixrem
        require('pixrem')(),
        // W3C CSS Level4 :matches() pseudo class, e.g. p:matches(:first-child, .special) { }
        // https://github.com/postcss/postcss-selector-matches
        require('postcss-selector-matches')(),
        // Transforms :not() W3C CSS Level 4 pseudo class to :not() CSS Level 3 selectors
        // https://github.com/postcss/postcss-selector-not
        require('postcss-selector-not')(),
        // Postcss flexbox bug fixer
        // https://github.com/luisrudge/postcss-flexbugs-fixes
        require('postcss-flexbugs-fixes')(),
        // Add vendor prefixes to CSS rules using values from caniuse.com
        // https://github.com/postcss/autoprefixer
        require('autoprefixer')({
          browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9' // React doesn't support IE8 anyway
          ]
        })
      ]
    }
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
  test: /\.scss$/,
  exclude: null,
  loaders: [
    'style',
    BASE_CSS_LOADER,
    'postcss',
    'sass-loader'
  ]
  /* loaders: [
   *   'style-loader',
   *   'css-loader',
   *   'sass-loader'
   * ]*/
})

webpackConfig.module.loaders.push({
  test: /\.css$/,
  exclude: null,
  loaders: [
    'style',
    BASE_CSS_LOADER + '&modules&importLoaders=1&localIdentName=[path]__[name]__[hash:base64:5]',
    'postcss'
  ]
})

webpackConfig.postcss = [
  cssnano({
    autoprefixer: {
      add: true,
      remove: true,
      browsers: ['last 2 versions']
    },
    discardComments: {
      removeAll: true
    },
    discardUnused: false,
    mergeIdents: false,
    reduceIdents: false,
    safe: true,
    sourcemap: true
  })
]

module.exports = webpackConfig
