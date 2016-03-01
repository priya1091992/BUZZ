

//angular.module('projectAppApp')
//  .controller('MainCtrl', function ($scope, $http, socket) {
//    $scope.awesomeThings = [];
//
//    $http.get('/api/things').success(function(awesomeThings) {
//      $scope.awesomeThings = awesomeThings;
//      socket.syncUpdates('thing', $scope.awesomeThings);
//    });
//
//    $scope.addThing = function() {
//      if($scope.newThing === '') {
//        return;
//      }
//      $http.post('/api/things', { name: $scope.newThing });
//      $scope.newThing = '';
//    };
//
//    $scope.deleteThing = function(thing) {
//      $http.delete('/api/things/' + thing._id);
//    };
//
//    $scope.$on('$destroy', function () {
//      socket.unsyncUpdates('thing');
//    });
//  });
'use strict';

angular.module('projectAppApp')
  .controller('MainCtrl', function ($scope, Auth, $location, $window) {
    console.log(Auth.isLoggedIn())
    $scope.isLoggedIn = Auth.isLoggedIn();
    if($scope.isLoggedIn){
      $location.path('/home');
    }
    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });