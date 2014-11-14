(function(angular) {
    'use strict';
    angular.module('mainModule').run(function($httpBackend) {

        function returnSamplesLikeServer() {
            var details;

            var request = new XMLHttpRequest();
            request.open('GET', '../mocks/serverData.json', false);
            request.send(null);
            details = JSON.parse(request.response);

            return details;
        }

        $httpBackend.whenPOST(/\/experiments/).respond(function() {
            return [200, returnSamplesLikeServer(), {}];
        });
    });
})(angular);
