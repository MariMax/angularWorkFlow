'use strict';
/* js */
import angular from 'angular'
import uiRouter from 'angular-ui-router'
import defaultRoute from'./config.default.route'
import defaultAuthAction from './auth.default.error'
import profile from './profile/profile.module.js'
import defaultModule from './default/default.module.js'
import loginModule from './login/login.module.js'
/* css global */
import 'bootstrap-css-only'

angular.module('app', [uiRouter, loginModule.name, profile.name, defaultModule.name])
    .config(defaultRoute)
    .run(defaultAuthAction);

angular.bootstrap(document, ['app']);

