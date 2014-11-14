'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep');

var streamqueue = require('streamqueue');
var mainBowerFiles = require('main-bower-files');

gulp.task('test', function() {

  var bowerFiles = gulp.src(mainBowerFiles({filter:/.*js$/}));

  var files = gulp.src('src/{app,components}/**/*.js').pipe($.angularFilesort());

  var tests = gulp.src('test/unit/**/*.js');


  return streamqueue({ objectMode: true },
            bowerFiles,
            files,
            tests
        )
         .pipe($.karma({
      configFile: 'test/karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });

});
