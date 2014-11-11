'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var stylus = require('gulp-stylus');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('compileCss', function() {
    return gulp.src('src/assets/**/*.styl')
        .pipe(stylus())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe($.csso())
        .pipe(gulp.dest('./src/assets'));
});
