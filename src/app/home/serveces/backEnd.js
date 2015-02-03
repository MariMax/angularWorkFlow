(function(angular, Firebase) {
    'use strict';

    function authFactory($firebase, baseUrl, userUrl, detailsUrl, $q) {
        var ref = new Firebase(baseUrl);

        function add(user){

        }

        return {
            add:add
        };
    }

    angular.module('mainModule').factory('backEnd', authFactory);
})(angular, Firebase);
