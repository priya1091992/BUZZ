'use strict';

angular.module('projectAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.lostFound', {
        url: '/lostFound',
        templateUrl: 'app/lostFound/lostFound.html',
        controller: 'LostFoundCtrl'
      });
  });
