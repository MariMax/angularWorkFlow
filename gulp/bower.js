'use strict';

var gulp = require('gulp');
var bower = require('gulp-bower');

gulp.task('bower',['clean'], function() {
  return bower();
});