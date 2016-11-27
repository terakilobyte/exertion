const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const path = require('path')
const gutil = require('gulp-util')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const process = require('process')

const input = path.join(__dirname, './web/static/css/application.scss')

const output = path.join(__dirname, './priv/static/css')

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
}

gulp.task('sassy', ['sass', 'watch'])

gulp.task('sass', function (cb) {
  gulp
    .src(input)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest(output))
  cb()
})

gulp.task('watch', function (cb) {
  gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
    .watch(input, ['sass'])
    // When there is a change,
    // log a message in the console
    .on('change', function (event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
    })
  cb()
})

const devCompiler = webpack(require('./webpack.config.js'))

gulp.task('webpack:build-dev', (cb) => {
  devCompiler.run((err, stats) => {
    if (err) throw new gutil.PluginError('webpack:build-dev', err)
    gutil.log('[webpack:build-dev]', stats.toString({
      colors: true,
      chunks: false
    }))
    cb()
  })
})
/* 
 * gulp.task('webpack-dev-server', cb => {
 *   let myConfig = Object.create(require('./webpack.config.js'))
 *   myConfig.debug = true
 * 
 *   new WebpackDevServer(webpack(myConfig), {
 *     publicPath: myConfig.output.publicPath,
 *     stats: {
 *       colors: true,
 *       chunks: false
 *     }
 *   }).listen(4001, 'localhost', err => {
 *     if (err) throw new gutil.PluginError('webpack-dev-server', err)
 *     gutil.log('[webpack-dev-server]', 'localhost:4001')
 *     process.on('SIGINT', () => {
 *       console.log('got sigint, shutting down')
 *       process.exit()
 *     })
 *   })
 * })*/
/* 
 * process.on('SIGINT', () => {
 *   console.log('shutting things down')
 *   process.exit()
 * })
 * */
process.on('exit', (code) => {
  console.log('got an exit with code ', code)
})
