'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});


gulp.task('injectJS', function() {
    return gulp.src('src/index.html')
        .pipe($.inject(gulp.src(['src/assets/**/*.js','src/app/**/*.js']).pipe($.angularFilesort()), {
            read: false,
            starttag: '<!-- inject:userJS -->',
            addRootSlash: false,
            relative:true
            
        }))
        .pipe(gulp.dest('src'))
        .pipe($.size());
});