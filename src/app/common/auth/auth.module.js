'use strict';
import angular from 'angular'
import ngStorage from 'ngstorage';
import Auth from './services/Auth';

export default angular.module('authModule',[ngStorage.name])
  .service('authService', ['$sessionStorage','$q', Auth])
