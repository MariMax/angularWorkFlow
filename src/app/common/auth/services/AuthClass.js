export default class Auth{
  constructor(storage){
    this.storage = storage;
  }

  isLoggedInfunction(){
    return this.storage.isLoggedIn;
  }

  logIn(){
    this.storage.isLoggedIn = true;
  }

  logOut(){
    this.storage.isLoggedIn = false;
  }
}