'use strict';

import ProfileCtrl from './controllers/profile.controller.js'

export default function($stateProvider) {
  $stateProvider
    .state('profile', {
      url: '/profile',
      template: require('./views/profile.html'),
      controller: ProfileCtrl,
      controllerAs: 'vm',
      resolve:{
        isAuthenticated:(authService) => {
          return authService.isLoggedIn()?Promise.resolve():Promise.reject();
        }
      }

    })
}
