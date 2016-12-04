var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.config.js')
var cssConfig = require('./webpack.makeGlobalCSS.js')
var gulp = require('gulp')
require('./Gulpfile.js')

webpack(cssConfig)

gulp.start('default')

var compiler = webpack(config)
var app = express()
app.use(require('cors')())

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log
}))

app.listen(4001, 'localhost', (err) => {
  if (err) return console.error(err)
  console.log('dev server running on localhost:4001')
})

process.stdin.resume()
process.stdin.on('end', () => process.exit(0))
