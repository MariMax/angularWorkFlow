'use strict';
var webpackConfig = require('./webpack.test');

module.exports = function(config) {

  config.set({
    basePath: '..',

    files: [
      //Grab all files in the ./test/unit folder that contain "spec".
      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './tests.webpack.js'
    ],

    preprocessors: {
      //Reference: http://webpack.github.io/docs/testing.html
      //Reference: https://github.com/webpack/karma-webpack
      //Convert files with webpack and load sourcemaps
      './tests.webpack.js': ['webpack', 'sourcemap']
    },

    autoWatch: false,

    singleRun: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: 'dist/coverage/',
      type: 'html'
    },

    webpack: webpackConfig,

    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-coverage'
    ]
  });

};
