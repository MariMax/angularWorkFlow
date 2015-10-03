'use strict';
import angular from 'angular'
import routing from './profile.router.js'
import uiRouter from 'angular-ui-router'
import auth from '../common/auth/auth.module.js';
import navigation from '../common/navigation/navigation.module.js';

export default angular.module('profileModule',[uiRouter, auth.name, navigation.name])
  .config(routing);
