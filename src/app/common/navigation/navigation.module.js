'use strict';
import angular from 'angular'
import uiRouter from 'angular-ui-router'
import auth from '../auth/auth.module.js'
import navbar from './directives/navbar/navbar.js'

export default angular.module('navigationModule',[uiRouter, auth.name])
  .directive('navBar', navbar);
