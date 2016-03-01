'use strict';
//
angular.module('projectAppApp')
  .controller('HomeCtrl', ['$scope','$http', '$state','$location', 'Auth' ,function ($scope, $http, $state, $location,Auth) {
    $scope.message = 'Hello';
    //$http.get("/api/posts")
    //  .then(function(response){
    //    $scope.obj = response.data;
    //  });
    $scope.getUserName = Auth.getCurrentUser().name;
    $scope.getCurrentUser = Auth.getCurrentUser();
    //$scope.imageUrl = Auth.getCurrentUser().google.image.url;
    $scope.isLoggedIn =Auth.isLoggedIn();

    if($scope.isLoggedIn){
      $location.path('/home/buzz');
    }


    }]);
