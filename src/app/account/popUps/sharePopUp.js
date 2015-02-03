(function(angular, _) {
    'use strict';

    function factory($modal, $q, $location) {
        function ctrl($scope, $modalInstance) {
            $scope.url = $location.absUrl();

            $scope.ok = function() {
                $modalInstance.close($scope.user);
            };

            $scope.cancel = function() {
                $modalInstance.dismiss('cancel');
            };
        }

        function open() {
            var defer = $q.defer();
            var modalInstance = $modal.open({
                templateUrl: 'app/account/popUps/views/sharePopUp.html',
                controller: ctrl,
                backdrop: 'static',
                size: 'lg'
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
