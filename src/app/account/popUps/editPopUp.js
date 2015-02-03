(function(angular, _) {
    'use strict';

    function factory($modal, $q) {
        function ctrl($scope, $modalInstance, user, details) {
            $scope.user = user;
            $scope.details = details;

            $scope.ok = function() {
                if ($scope.user.name && $scope.details.job && $scope.details.department) {
                    $modalInstance.close({user:$scope.user, details:$scope.details});
                } else {
                    $scope.showError = true;
                }
            };

            $scope.cancel = function() {
                $modalInstance.dismiss('cancel');
            };
        }

        function open(user, details) {
            var defer = $q.defer();
            var modalInstance = $modal.open({
                templateUrl: 'app/account/popUps/views/editPopUp.html',
                controller: ctrl,
                backdrop: 'static',
                size: 'lg',
                resolve:{
                    user:function(){
                        return angular.copy(user);
                    },
                    details:function(){
                        return angular.copy(details);
                    }
                }
            });

            modalInstance.result.then(function(result) {
                defer.resolve(result);
            }, function() {
                defer.reject();
            });

            return defer.promise;
        }
        return {
            open: open
        };

    }
    angular.module('accountModule').factory('editPopUp', factory);
})(angular, _);
