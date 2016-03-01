'use strict';

angular.module('projectAppApp')
  .controller('LostFoundCtrl', function ($scope, $http) {

    $scope.buzzs={};

        var refresh=function(){
          $http.get("/api/posts")
            .then(function(response){
              if(response.data.length){
                $scope.buzzs = response.data
                console.log($scope.buzzs);
                console.log("hhhhhhhhhhhh")
              }

            });
        }



  refresh();
    console.log("hvvvvvvv");
    console.log($scope.buzzs);
  });
