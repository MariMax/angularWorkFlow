(function(angular, Firebase) {
    'use strict';

    function authFactory($firebaseAuth, baseUrl, $q) {
        var ref = new Firebase(baseUrl);

        function login(email, password) {
            var defer = $q.defer();
            ref.authWithPassword({
                email: email,
                password: password
            }, function(error, authData) {
                if (error) {
                    defer.reject();
                } else {
                    defer.resolve(authData);
                }
            }, {
                remember: 'sessionOnly'
            });

            return defer.promise;
        }

        function logout() {
            ref.unauth();
        }

        function checkAuth(){
            return ref.getAuth();
        }

        return {
            authService: $firebaseAuth(ref),
            login: login,
            logout: logout,
            checkAuth: checkAuth
        };
    }

    angular.module('mainModule').factory('auth', authFactory);
})(angular, Firebase);
