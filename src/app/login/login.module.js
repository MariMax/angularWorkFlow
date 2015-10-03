'use strict';
import angular from 'angular'
import authModule from '../common/auth/auth.module';
import login from './directives/login.js'
import router from './login.router.js'

export default angular.module('loginModule',[authModule.name])
  .config(router)
  .directive('login', login);
