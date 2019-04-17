const gulp = require('gulp');
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
        'jquery-ui': 'jquery-ui',
      }),
    ],
  }))
  .on('error', swallowError)
  .pipe(gulp.dest('static/js')));

gulp.task('watch', () => {
  gulp.watch('src/js/**/*.js', gulp.series('js'));
  gulp.watch('layouts/**/*.html');
});

gulp.task('build', gulp.series('js'));
