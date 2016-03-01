'use strict';

angular.module('projectAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('compl', {
        url: 'yes',
        templateUrl: '../yes/compl/compl.html',
        controller: 'ComplCtrl'
      });
  });