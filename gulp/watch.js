'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('watch', ['injects'], function() {
    gulp.watch('src/{app,components}/**/*.js', ['scripts', 'injectJS']);
    gulp.watch('src/**/*.styl', function(event){
    	if (event.type === 'added'){
    		runSequence('injectCss');
    	} else {
    		runSequence('compileCss');
    	}
    });
    gulp.watch('src/assets/images/**/*', ['images']);
    gulp.watch('bower.json', ['wiredep']);
});
