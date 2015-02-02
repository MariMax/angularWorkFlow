'use strict';

angular.module('handsomeTry', ['ui.router', 'mainModule','accountModule', 'ui.bootstrap', 'firebase'])
    .config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    });

angular.module('handsomeTry').config(function($provide) {
    $provide.constant('baseUrl', 'https://sweltering-fire-6010.firebaseio.com/');
});

angular.module('handsomeTry').run(function($rootScope, $state) {
  $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
  	debugger;
    if (error === 'AUTH_REQUIRED') {
      $state.go('home');
    }
  });
});