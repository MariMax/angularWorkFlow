(function(angular, _) {
    'use strict';

    function factory($modal, $q, $location) {
        function ctrl($scope, $modalInstance, id) {
            $scope.url = $location.protocol()+'://'+$location.host()+':'+$location.port()+'/#/account/'+id;

            $scope.ok = function() {
                $modalInstance.close($scope.user);
            };

            $scope.cancel = function() {
                $modalInstance.dismiss('cancel');
            };
        }

        function open(id) {
            var defer = $q.defer();
            var modalInstance = $modal.open({
                templateUrl: 'app/account/popUps/views/sharePopUp.html',
                controller: ctrl,
                backdrop: 'static',
                size: 'lg', 
                resolve: {
                    id:function(){
                        return id;
                    }
                }
            });

            modalInstance.result.then(function() {
                defer.resolve();
            }, function() {
                defer.reject();
            });

            return defer.promise;
        }
        return {
            open: open
        };

    }
    angular.module('accountModule').factory('sharePopUp', factory);
})(angular, _);
