'use strict';
//
angular.module('projectAppApp')
  .controller('HomeCtrl', ['$scope','$http', '$state','$location', 'Auth' ,function ($scope, $http, $state, $location,Auth) {
    $scope.message = 'Hello';
    $scope.User=Auth.getCurrentUser();
    $scope.getUserName = $scope.User.name;
    $scope.isLoggedIn =Auth.isLoggedIn();

    $scope.userRole=function(){
      if($scope.User.role=='Admin'){
        $state.go('home.compl.logcompl');
      }
    else{
        $state.go('home.compl.postcompl');
      }
    }
    if($scope.isLoggedIn){
      $location.path('/home/buzz');
    }
    }]);
