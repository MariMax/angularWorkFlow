export default class Auth {
  constructor(storage, promise) {
    this.storage = storage;
    this.promise = promise;
  }

  isLoggedIn() {
    return this.storage.isLoggedIn;
  }

  logIn(email, pass) {
    const defer = this.promise.defer();

    this.storage.isLoggedIn = true;
    this.storage.email = email;
    this.storage.pass = pass;
    defer.resolve();

    return defer.promise;
  }

  logOut() {
    this.storage.isLoggedIn = false;
    this.storage.email = null;
    this.storage.pass = null;
  }
}
