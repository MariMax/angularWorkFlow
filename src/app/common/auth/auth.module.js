'use strict';
import angular from 'angular';
import ngStorage from 'ngstorage';
import authService from './services/auth';

let module = angular.module('authModule',[ngStorage.name]);
authService(module);

export default module.name;
