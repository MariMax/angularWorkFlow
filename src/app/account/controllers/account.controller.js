'use strict';

angular.module('accountModule')
    .controller('accountController', function($scope, addPopUp) {
    	$scope.add = function(){
    		addPopUp.open().then(function(user){
    			debugger;
    			console.log(user);
    		});
    	}
    });
