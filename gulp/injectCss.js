'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});


gulp.task('injectCss',['compileCss'], function() {
    return gulp.src('src/index.html')
        .pipe($.inject(gulp.src('src/{css,app,assets}/**/*.css'), {
            read: false,
            starttag: '<!-- inject:userCss -->',
            addRootSlash: false,
            relative:true
            
        }))
        .pipe(gulp.dest('src'))
        .pipe($.size());
});