(function(angular, _) {
    'use strict';

    function factory($modal, $q) {
        function ctrl($scope, $modalInstance) {
            $scope.user = {};

            $scope.ok = function() {
                if ($scope.user.name && $scope.user.job && $scope.user.department) {
                    $modalInstance.close($scope.user);
                } else {
                    $scope.showError = true;
                }
            };

            $scope.cancel = function() {
                $modalInstance.dismiss('cancel');
            };
        }

        function open() {
            var defer = $q.defer();
            var modalInstance = $modal.open({
                templateUrl: 'app/account/popUps/views/addPopUp.html',
                controller: ctrl,
                backdrop: 'static',
                size: 'lg'
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
    angular.module('accountModule').factory('addPopUp', factory);
})(angular, _);
