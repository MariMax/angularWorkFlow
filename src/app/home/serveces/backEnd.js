(function(angular, window, _) {
    'use strict';

    function backEndFactory($http, $q, baseUrl) {
        var requests = [];

        var getexperiments = function(filter) {
            var canceller = $q.defer();
            var uri = baseUrl + 'experiments';

            var cancel = function(reason) {
                canceller.resolve(reason);
                _.remove(requests, _request);
            };

            var data = {
                searchString: filter.searchString !== '' ? filter.searchString : null,
                dataOwner: filter.owner ? filter.owner : 'All',
                dataStatuses: filter.status ? filter.status : {
                    submited: true,
                    drafts: true,
                    published: true
                }
            };

            var promise =
                $http.post(uri,
                    data, {
                        timeout: canceller.promise
                    });

            var _request = {
                type: 'getexperiments',
                filter: filter,
                promise: promise.then(function(response) {
                    _.remove(requests, _request);
                    return response.data;
                }, function() {
                    _.remove(requests, _request);
                }),
                cancel: cancel
            };

            requests.push(_request);

            return _request;
        };


        return {
            getFilteredExperiments: function(filter) {
                var _request;
                _.each(requests, function(request) {
                    if (request.type === 'getexperiments' &&
                        filter.searchString === request.filter.searchString &&
                        filter.owner === request.filter.owner &&
                        filter.status.submited === request.filter.status.submited &&
                        filter.status.drafts === request.filter.status.drafts &&
                        filter.status.published === request.filter.status.published) {
                        _request = request;
                    }
                });
                if (!_request) {
                    _request = getexperiments(filter);
                }
                return _request;
            }

        };
    }

    angular.module('mainModule').factory('experimentsBackEnd', backEndFactory);
})(angular, window, _);
