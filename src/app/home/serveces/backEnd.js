(function(angular) {
    'use strict';

    function backEndFactory($http, baseUrl) {

        return {
            getSamples: function() {
                return $http.get(baseUrl + 'samples').then(function(resp) {
                    return resp.data;
                });
            }
        };
    }

    angular.module('mainModule').factory('backEnd', backEndFactory);
})(angular);
