'use strict';
import angular from 'angular';

export default angular.module('authModule').factory('authService', function($sessionStorage){
  return {
    isLoggedIn:function(){
      return $sessionStorage.isLoggedIn;
    },
    logIn:function(){
      $sessionStorage.isLoggedIn = true;
    },
    logOut:function(){
      $sessionStorage.isLoggedIn = false;
    }
  }
});
