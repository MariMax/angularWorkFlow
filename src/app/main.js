'use strict';

angular.module('handsomeTry', ['ngCookies', 'ui.router','mainModule'])
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  })
;
