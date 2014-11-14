'use strict';

angular.module('mainModule')
    .controller('MainCtrl', function($scope, experimentsBackEnd) {
    	function updateData(newData){
            _.remove($scope.data);
            _.each(newData, function(item) {
                $scope.data.push(item);
            });
    	}

        $scope.data = [
            []
        ];

        $scope.check = {
            submited: true,
            drafts: true,
            published: true
        };

        $scope.ownModel = 'All';

        $scope.renderGetter = function(renderCb) {
            if (angular.isFunction(renderCb)) {
                $scope.render = renderCb;
            }
        };

        experimentsBackEnd.getFilteredExperiments({
            owner: $scope.ownModel,
            status: $scope.check
        }).promise.then(function(resp) {
        	updateData(resp);
            if (angular.isFunction($scope.render)) {
                $scope.render();
            }
        });

    });
