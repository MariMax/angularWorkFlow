'use strict';
import angular from 'angular';
import authModule from '../common/auth/auth.module';

export default angular.module('loginModule',[authModule.name]);
