'use strict';

export default function($stateProvider) {
  $stateProvider
    .state('default', {
      url: '/',
      template: require('./views/default.html')
    })
}
