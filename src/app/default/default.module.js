'use strict';
import angular from 'angular'
import routing from './default.router.js'
import uiRouter from 'angular-ui-router'
import navigation from '../common/navigation/navigation.module.js';

export default angular.module('defaultModule',[uiRouter, navigation.name])
  .config(routing);
