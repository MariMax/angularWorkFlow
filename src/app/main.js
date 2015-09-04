'use strict';

/*js*/
import angular from 'angular';
import auth from 'authModule';
import uiRouter from 'angular-ui-router';
import bui from 'angular-ui-bootstrap';
import defaultRoute from'./config.default.route';
import defaultAuthAction from './auth.default.error';
import profile from './profile/profile.module.js';
/*css*/
//import 'bootstrap-css-only';

angular.module('handsomeTry', [uiRouter, bui, auth, profile])
    .config(defaultRoute)
    .run(defaultAuthAction);

angular.bootstrap(document, ['handsomeTry']);
