'use strict';

describe('controllers', function() {
    var scope, $httpBackend, $rootScope, createController, mockBackEnd, backEnd;

    beforeEach(module('handsomeTry'));

    beforeEach(inject(function($injector) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');

        // Get hold of a scope (i.e. the root scope)
        $rootScope = $injector.get('$rootScope');
        // The $controller service is used to create instances of controllers
        var $controller = $injector.get('$controller');

        backEnd = $injector.get('backEnd');

        createController = function() {
            scope = $rootScope.$new();
            $controller('MainCtrl', {
                '$scope': scope,
                'backEnd':backEnd
            });
        };
    }));

    afterEach(function() {
        scope = undefined;
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    it('should contain check object with keys check1, check2, check3 and they should be true', function() {
        expect(scope).toBeUndefined();

        createController();

        expect(scope.check).not.toBeUndefined();
        expect(scope.check).not.toBeNull();
        expect(scope.check.check1).toBe(true);
        expect(scope.check.check2).toBe(true);
        expect(scope.check.check3).toBe(true);

    });

    it('should contain ownModel and it should be All', function() {
        expect(scope).toBeUndefined();

        createController();

        expect(scope.ownModel).toBe('All');
    });
});
