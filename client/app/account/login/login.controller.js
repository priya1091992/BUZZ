'use strict';

angular.module('projectAppApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $window) {

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
