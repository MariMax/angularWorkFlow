'use strict';

angular.module('handsomeTry', ['ui.router', 'mainModule','accountModule', 'ui.bootstrap', 'firebase'])
    .config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    });

angular.module('handsomeTry').config(function($provide) {
    $provide.constant('baseUrl', 'https://sweltering-fire-6010.firebaseio.com/');
    $provide.constant('userUrl','users/');
    $provide.constant('detailsUrl','details/');
});

angular.module('handsomeTry').run(function($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    if (error === 'AUTH_REQUIRED') {
      $state.go('home');
    }
  });
});