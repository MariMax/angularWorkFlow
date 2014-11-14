'use strict';

describe('The main view', function() {

    beforeEach(function() {
        browser.get('http://localhost:3000/index.html');
    });

    it('list more than 5 awesome things', function() {
        element.all(by.tagName('tr')).count().then(function(count) {
            expect(count >= 8).toBeTruthy();
        });
    });

    it('page should has 4 tables', function() {
        element.all(by.tagName('table')).count().then(function(count) {
            expect(count >= 4).toBeTruthy();
        });
    });

    it('page should has search field', function() {
        element.all(by.id('srch-term')).count().then(function(count) {
            expect(count === 1).toBeTruthy();
        });
    });

    it('page should has 2 radio buttons field', function() {
        element.all(by.model('ownModel')).count().then(function(count) {
            expect(count === 2).toBeTruthy();
        });
    });

    it('page should has 3 check buttons', function() {
        element.all(by.xpath('//label[@btn-checkbox]')).count().then(function(count) {
            expect(count === 3).toBeTruthy();
        });
    }); 

    it('page should has 3 fieldsets', function() {
        element.all(by.tagName('fieldset')).count().then(function(count) {
            expect(count === 3).toBeTruthy();
        });
    });     

    it('page should has nav-bar', function() {
        element.all(by.css('.navbar')).count().then(function(count) {
            expect(count === 1).toBeTruthy();
        });
    });

    it('page should has 2 rows', function() {
        element.all(by.css('.row')).count().then(function(count) {
            expect(count === 2).toBeTruthy();
        });
    });  

    it('page should has 1 search button', function() {
        element.all(by.css('.fa.fa-search')).count().then(function(count) {
            expect(count === 1).toBeTruthy();
        });
    });    


});
