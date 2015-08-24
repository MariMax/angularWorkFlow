'use strict';

angular.module('handsomeTry', [require('authModule'), require('angular-ui-router')])
    .config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/profile');
    });

angular.module('handsomeTry').run(function($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    if (error === 'AUTH_REQUIRED') {
      $state.go('login');
    }
  });
});

export default angular.module('handsomeTry');
