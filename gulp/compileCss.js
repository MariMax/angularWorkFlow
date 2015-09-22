'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var stylus = require('gulp-stylus');
var csso = require('gulp-csso-fix-in-csso215');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('compileCss', function() {
    return gulp.src('src/styl/*.styl')
        .pipe(stylus())
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(csso())
        .pipe(gulp.dest('./src/css'));
});