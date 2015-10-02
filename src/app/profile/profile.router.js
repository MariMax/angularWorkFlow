'use strict';

import MainCtrl from './controllers/profile.controller.js'

export default function($stateProvider) {
  $stateProvider
    .state('profile', {
      url: '/profile',
      template: require('./views/profile.html'),
      controller: MainCtrl,
      controllerAs: 'vm'

    })
}
