'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('injects', function(done) {
    runSequence('wiredep','injectJS','injectCss', done);
});