'use strict';
//
angular.module('projectAppApp')
  .controller('HomeCtrl', ['$scope','$http', '$state',function ($scope, $http, $state) {
    $scope.message = 'Hello';
    //$http.get("/api/posts")
    //  .then(function(response){
    //    $scope.obj = response.data;
    //  });


    }]);
