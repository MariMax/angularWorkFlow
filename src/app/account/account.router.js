'use strict';

angular.module('accountModule').config(function($stateProvider) {
    $stateProvider
        .state('account', {
            url: '/account',
            templateUrl: 'app/account/views/account.html',
            controller: 'accountController',
            resolve: {
                'currentAuth': function(auth) {
                    return auth.authService.$requireAuth().then(function(){
                    	debugger;
                    }, function(err){return err});
                }
            }
        });
});
