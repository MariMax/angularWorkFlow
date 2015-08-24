'use strict';

angular.module('profileModule').config(function($stateProvider) {
    $stateProvider
        .state('profile', {
            url: '/profile',
            template: require('./views/profile.html'),
            controller: 'MainCtrl'
        });
});
