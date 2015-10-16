/* globals describe, beforeEach, expect, it, inject*/

import Auth from '../../../src/app/common/auth/services/auth.js';

describe('Service: auth', function() {
  let storage;
  let auth;
  let $rootScope;

  beforeEach(inject(function($injector) {
    const $q = $injector.get('$q');
    $rootScope = $injector.get('$rootScope').$new();
    storage = {};
    auth = new Auth(storage, $q);
  }));

  it('should be initialized', function() {
    expect(auth).toBeDefined();
    expect(auth.isLoggedIn).toBeDefined();
    expect(auth.logIn).toBeDefined();
    expect(auth.logOut).toBeDefined();
  });

  it('should be logged In', function() {
    storage.isLoggedIn = true;

    expect(auth.isLoggedIn()).toBeTruthy();
  });

  it('should log In and save credentials', function() {
    auth.logIn('email', 'pass');

    $rootScope.$digest();

    expect(storage.email).toBe('email');
    expect(storage.pass).toBe('pass');
    expect(storage.isLoggedIn).toBeTruthy();
  });

  it('should log out and remove credentials', function() {
    storage.email = 'email';
    storage.pass = 'pass';
    storage.isLoggedIn = true;
    expect(storage.email).toBe('email');
    expect(storage.pass).toBe('pass');
    expect(storage.isLoggedIn).toBeTruthy();
    auth.logOut();
    expect(storage.email).toBeNull();
    expect(storage.pass).toBeNull();
    expect(storage.isLoggedIn).toBeFalsy();
  });
});
