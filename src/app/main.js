'use strict';

/* js */
import angular from 'angular'
import auth from './common/auth/auth.module'
import uiRouter from 'angular-ui-router'
import bui from 'angular-ui-bootstrap'
import defaultRoute from'./config.default.route'
import defaultAuthAction from './auth.default.error'
import profile from './profile/profile.module.js'
/* css global */
import 'bootstrap-css-only'
console.log('Hi');
angular.module('app', [uiRouter, bui, auth.name, profile.name])
    .config(defaultRoute)
    .run(defaultAuthAction);

angular.bootstrap(document, ['app']);

