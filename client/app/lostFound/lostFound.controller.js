'use strict';

angular.module('projectAppApp')
  .controller('LostFoundCtrl',['$scope','$http', function ($scope, $http) {
    var LostFound = this;
    LostFound.message = 'Hello';
    LostFound.buzzs = [];
    var refresh=function(){
      $http.get("/api/posts")
        .then(function(response){
          if(response.data.length){
            LostFound.buzzs = response.data
          }

        });
    }
    refresh();
  }]);
