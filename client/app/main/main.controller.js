'use strict';

angular.module('projectAppApp')
  .controller('MainCtrl', function ($scope, Auth, $location, $window) {
    console.log(Auth.isLoggedIn())
    $scope.isLoggedIn = Auth.isLoggedIn();

    if($scope.isLoggedIn){
      $location.path('/home/buzz');
    }
    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
