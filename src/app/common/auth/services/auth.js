'use strict';
import angular from 'angular';
import Auth from './AuthClass';

Auth.$inject=['storageImplementation'];

export default angular.module('authModule').service('authService', Auth);
