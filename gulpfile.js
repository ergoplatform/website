const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const server = require('browser-sync').create();
const webpackStream = require('webpack-stream');
const webpack = require('webpack');

function swallowError(error) {
  // If you want details of the error in the console
  console.log(error.toString());

  this.emit('end');
}

gulp.task('js', () => gulp.src('./src/js/index.js')
  .pipe(webpackStream({
    output: {
      filename: 'index.js',
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env'],
          },
        },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      }),
    ],
  }))
  .on('error', swallowError)
  .pipe(gulp.dest('static/js')));

gulp.task('css', () => gulp.src('src/scss/style.scss')
  .pipe(plumber())
  .pipe(sourcemap.init())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer(),
  ]))
  .on('error', swallowError)
  .pipe(sourcemap.write('.'))
  .pipe(gulp.dest('static/css'))
  .pipe(server.stream()));

gulp.task('watch', () => {
  gulp.watch('src/scss/**/*.scss', gulp.series('css'));
  gulp.watch('src/js/**/*.js', gulp.series('js'));
  gulp.watch('layouts/**/*.html');
});

gulp.task('build', gulp.series('css', 'js'));
