'use strict';

var gulp = require('gulp');

gulp.task('watch', ['injects'], function() {
    gulp.watch('src/{app,components}/**/*.js', ['scripts', 'injectJS']);
    gulp.watch('src/**/*.styl', ['compileCss']);
    gulp.watch('src/assets/images/**/*', ['images']);
    gulp.watch('bower.json', ['wiredep']);
});
