'use strict';

/*js*/
import angular from 'angular';
import auth from 'authModule';
import uiRouter from 'angular-ui-router';
import bui from 'angular-ui-bootstrap';
import defaultRoute from'./config.default.route';
import defaultAuthAction from './auth.default.error';
/*css*/
import 'bootstap-css-only';

export default angular.module('handsomeTry', [auth, uiRouter, bui])
    .config(defaultRoute)
    .run(defaultAuthAction).name;
