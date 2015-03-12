/* jshint node:true */

(function() {

  'use strict';

  var gulp = require('gulp');
  var jshint = require('gulp-jshint');

  gulp.task('jshint', function() {
    return gulp.src('js/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(jshint.reporter('fail'));
  });

  gulp.task('watch', function() {
    gulp.watch('js/**/*.js', ['jshint']);
  });

  gulp.task('default', ['jshint']);
}());
