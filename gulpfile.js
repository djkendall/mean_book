/* jshint node:true */

var GULP = (function() {

  'use strict';

  var gulp = require('gulp');
  var jshint = require('gulp-jshint');
  var jscs = require('gulp-jscs');

  gulp.task('jshint', function() {
    return gulp.src('js/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
  });

  gulp.task('jscs', function() {
    return gulp.src('js/**/*.js')
      .pipe(jscs());
  });

  gulp.task('watch', function() {
    gulp.watch('js/**/*.js', ['jshint']);
  });

  gulp.task('default', ['jshint', 'jscs']);
}());
