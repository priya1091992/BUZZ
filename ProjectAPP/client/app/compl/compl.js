'use strict';

angular.module('projectAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.compl', {
        url: '/compl',
        templateUrl: 'app/compl/compl.html',
        controller: 'ComplCtrl'
      });
  });
