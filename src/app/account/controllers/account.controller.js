'use strict';

angular.module('accountModule')
    .controller('accountController', function($scope, addPopUp, deletePopUp,editPopUp,sharePopUp, backEnd, people, $state, auth, $location) {
        $scope.people = people;
        $scope.add = function() {
            addPopUp.open().then(function(user) {
                backEnd.add(user);
            });
        };

        $scope.logout = function(){
        	auth.logout();
        	$state.go('home');
        };

        $scope.delete = function(){
        	deletePopUp.open($state.params.id).then(function(){
        		$scope.people.$remove($scope.user);
        		$location.url('account');
        	})
        }

        $scope.edit = function(){
        	editPopUp.open($scope.user, $scope.userDetails).then(function(result){
        		$scope.user.name = result.user.name;
        		$scope.userDetails.job = result.details.job;
        		$scope.userDetails.department = result.details.department;
                $scope.userDetails.$save();
        		$scope.people.$save($scope.user);
        	});
        }

        $scope.share = function(){
        	sharePopUp.open($scope.user.$id);
        }

        $scope.open = function(id){
                $scope.user = $scope.people.$getRecord(id);
                $scope.userDetails = null;
                $scope.userDetails = backEnd.getUserDetails($scope.user.detailsId);
        }

        if ($state.params.id) {

        	people.$loaded().then(function(){
        		$scope.user = $scope.people.$getRecord($state.params.id);
        		$scope.userDetails = backEnd.getUserDetails($scope.user.detailsId);
        	})
            
        }
    });
