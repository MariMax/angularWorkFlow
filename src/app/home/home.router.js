'use strict';

angular.module('mainModule').config(function($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/home/views/home.html',
            controller: 'MainCtrl'
        });
});