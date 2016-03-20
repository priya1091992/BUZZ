'use strict';

angular.module('projectAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.buzz', {
        url: '/buzz',
        templateUrl: 'app/buzz/buzz.html',
        controller: 'BuzzCtrl',
        controllerAs: 'BuzzHome'
      })
  });
