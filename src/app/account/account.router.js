'use strict';

angular.module('accountModule').config(function($stateProvider) {
    $stateProvider
        .state('account', {
            url: '/account/:id',
            templateUrl: 'app/account/views/account.html',
            controller: 'accountController',
            resolve: {
                currentAuth: function(auth) {
                    return auth.authService.$requireAuth();
                },
                people: function(backEnd){
                	return backEnd.getUsers();
                }
            }
        });
});
