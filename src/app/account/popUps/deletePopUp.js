(function(angular, _) {
    'use strict';

    function factory($modal, $q) {
        function ctrl($scope, $modalInstance, id) {
            $scope.id = id;

            $scope.ok = function() {
                    $modalInstance.close();
            };

            $scope.cancel = function() {
                $modalInstance.dismiss('cancel');
            };
        }

        function open(id) {
            var defer = $q.defer();
            var modalInstance = $modal.open({
                templateUrl: 'app/account/popUps/views/deletePopUp.html',
                controller: ctrl,
                backdrop: 'static',
                size: 'lg',
                resolve:{
                    id:function(){
                        return id
                    }
                }
            });

            modalInstance.result.then(function(user) {
                defer.resolve(user);
            }, function() {
                defer.reject();
            });

            return defer.promise;
        }
        return {
            open: open
        };

    }
    angular.module('accountModule').factory('deletePopUp', factory);
})(angular, _);
