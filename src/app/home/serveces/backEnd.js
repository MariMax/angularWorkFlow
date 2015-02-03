(function(angular, Firebase) {
    'use strict';

    function backEndFactory($firebase, baseUrl, userUrl, detailsUrl, $q) {
        var userRef = new Firebase(baseUrl);
        var detailsRef = new Firebase(baseUrl);

        function add(_user) {
                return $firebase(detailsRef.child(detailsUrl)).$asArray().$add({job: _user.job, department:_user.department}).then(function(details) {
                    return $firebase(userRef.child(userUrl)).$asArray().$add({name: _user.name, detailsId:details.key()}).then(function(user) {
                        return user.key();
                });
            });
        }

        function get() {
            return $firebase(userRef.child(userUrl)).$asArray();
        }

        function getUserDetails(id) {
            return $firebase(detailsRef.child(detailsUrl).child(id)).$asObject();
        }

        return {
            add: add,
            getUsers: get,
            getUserDetails: getUserDetails
        };
    }

    angular.module('mainModule').factory('backEnd', backEndFactory);
})(angular, Firebase);
