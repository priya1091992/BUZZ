'use strict';

angular.module('projectAppApp')
  .controller('BuzzCtrl', function ($scope, $http, Auth, $location, $timeout) {
    var BuzzHome = this;
    BuzzHome.message = 'Hello';
    BuzzHome.buzzs = [];
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;

    $scope.getCurrentUser = Auth.getCurrentUser;

var refresh=function(){
    $http.get("/api/posts")
      .then(function(response){
        if(response.data.length){
          BuzzHome.buzzs = response.data

        }

      });
}


    refresh();

    console.log("hello")
  $scope.postfunc=function(){
   console.log($scope.postd);
    $http.post("/api/posts", $scope.postd).success(function(response){
      refresh();

    })
 }
//var i=0;
//    var j=0;
//
//    $scope.count = function () {
//       $scope.likes=i+i;
//      $scope.dislikes=j+1;
//      var data = $.param({
//
//        likes: $scope.likes,
//        dislikes: $scope.dislikes
//
//      });
//console.log(scope.buzzs._id)
//      $http.put('/api/posts/'+$scope.buzzs._id+ $scope.buzzs)
//        .success(function (data, status, headers) {
//          $scope.ServerResponse = data;
//          refesh();
//        })
//        .error(function (data, status, header, config) {
//          $scope.ServerResponse =  htmlDecode("Data: " + data +
//          "\n\n\n\nstatus: " + status +
//          "\n\n\n\nheaders: " + header +
//          "\n\n\n\nconfig: " + config);
//        });
//    };

  });
