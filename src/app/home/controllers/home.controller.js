'use strict';

angular.module('mainModule')
    .controller('MainCtrl', function($scope, auth, $state) {
        $scope.showError = false;

        if (auth.checkAuth()){
        	$state.go('account');
        }

        $scope.signIn = function() {
            auth.login($scope.email, $scope.password).then(function(){
                $state.go('account');
            }, function(){$scope.showError = true;});
        };
    });
