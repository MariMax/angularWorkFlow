'use strict';

module.exports = function(config) {

  config.set({
    basePath: '..',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/app/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch: false,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    preprocessors: {
      'src/app/**/*.js': ['coverage']
    },

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    reporters: ['progress', 'coverage'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-coverage'
    ]
  });

};
