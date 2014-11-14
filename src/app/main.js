'use strict';

angular.module('handsomeTry', ['ngCookies', 'ui.router','mainModule','ui.bootstrap','ngTouch','ngMockE2E'])
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  });

angular.module('handsomeTry').config(function($provide){
	$provide.constant('baseUrl','http://localhost:10000/');
});

//this file will be executed after all, so all requests that we didn't mock we should pass
  angular.module('handsomeTry').run(function($httpBackend) {
  	    $httpBackend.whenGET(/.*/).passThrough();
        $httpBackend.whenPUT(/.*/).passThrough();
        $httpBackend.whenPOST(/.*/).passThrough();
        $httpBackend.whenDELETE(/.*/).passThrough();
  });
