'use strict';

/*js*/
import angular from 'angular';
import auth from 'authModule';
import uiRouter from 'angular-ui-router';
import defaultRoute from'./config.default.route';
import defaultAuthAction from './auth.default.error';
/*css*/
import 'bootstap.css';

export default angular.module('handsomeTry', [auth, uiRouter])
    .config(defaultRoute)
    .run(defaultAuthAction).name;
