'use strict';

angular.module('mainModule')
    .controller('MainCtrl', function($scope, backEnd) {
       $scope.check = {
            check1: true,
            check2: true,
            check3: true
        };

        $scope.ownModel = 'All';

        backEnd.getSamples().then(function(response){
            debugger;
        });

    });
