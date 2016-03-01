'use strict';

angular.module('projectAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.buzz', {
        url: '/buzz',

        templateUrl: 'app/buzz/buzz.html',
        controller: 'BuzzCtrl as BuzzHome'
      })
      .state('home.bootstrap', {
        url: '/bootstrap',
        templateUrl: 'app/buzz/bootstrap.html',
        controller: 'BuzzCtrl as BuzzHome'
      });
  });
