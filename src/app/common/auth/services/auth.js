export default class Auth {
  constructor(storage) {
    this.storage = storage;
  }

  isLoggedIn() {
    return this.storage.isLoggedIn;
  }

  logIn(email, pass) {
    const defer = Promise.defer();

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
