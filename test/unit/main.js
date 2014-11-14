'use strict';

describe('controllers', function() {
    var scope, $httpBackend, $rootScope, $q, createController, mockBackEnd, backEnd;

    beforeEach(module('handsomeTry'));

    beforeEach(inject(function($injector) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');

        // Get hold of a scope (i.e. the root scope)
        $rootScope = $injector.get('$rootScope');
        // The $controller service is used to create instances of controllers
        var $controller = $injector.get('$controller');

        backEnd = $injector.get('experimentsBackEnd');

        $q = $injector.get('$q');

        createController = function() {
            scope = $rootScope.$new();
            $controller('MainCtrl', {
                '$scope': scope,
                'experimentsBackEnd':backEnd
            });
        };
    }));

    afterEach(function() {
        scope = undefined;
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should define more than 4 data rows', function() {
        expect(scope).toBeUndefined();

        spyOn(backEnd, "getFilteredExperiments").andCallFake(function() {
            var deferred = $q.defer();
            deferred.resolve([
                ["Screen 1", "15/07/2014", "PabloValensio", "Submited", "CRNA"],
                ["Screen 2", "11/07/2014", "ValentinaLukoshenko", "Pablished", "AnotherPlatform"],
                ["Screen 3", "13/04/2012", "MikeTyson", "Draft", "ThirdPlatform"],
                ["Screen 4", "12/05/2014", "VV", "Draft", "CRNA"]
            ]);
            return {
                promise: deferred.promise
            };
        });

        createController();

        scope.$apply();

        expect(angular.isArray(scope.data)).toBeTruthy();
        expect(scope.data.length === 4).toBeTruthy();
    });

    it('should contain check object with keys submited, drafts, published and they should be true', function() {
        expect(scope).toBeUndefined();

        createController();

        expect(scope.check).not.toBeUndefined();
        expect(scope.check).not.toBeNull();
        expect(scope.check.submited).toBe(true);
        expect(scope.check.drafts).toBe(true);
        expect(scope.check.published).toBe(true);

    });

    it('should contain ownModel and it should be All', function() {
        expect(scope).toBeUndefined();

        createController();

        expect(scope.ownModel).toBe('All');
    });
});
