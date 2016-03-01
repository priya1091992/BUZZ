angular.module('projectAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        abstract:true,
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      });
  });
