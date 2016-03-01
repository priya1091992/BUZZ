'use strict';


angular.module('projectAppApp')
  .controller('BuzzCtrl', function ($scope, $http, Auth, $location, $timeout) {
    var BuzzHome = this;
    BuzzHome.message = 'Hello';
    BuzzHome.buzzs = [];

    $scope.postd={};
    $scope.postd.category='BUZZ';
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;

    $scope.getCurrentUser = Auth.getCurrentUser;
    //console.log($scope.getCurrentUser().name);

    $scope.Category = function(categ){
      $scope.postd.category = categ;

      if(categ == 'BUZZ'){
        $scope.cat='BUZZ';
        $scope.postd.header='';
      }else{
        $scope.cat='Lost & Found';
        $scope.postd.header="Lost and Found"
      }
    }

    //console.log($scope.postd.category);
    //console.log($scope.postd);

    var refresh=function(){
      $http.get("/api/posts")
        .then(function(response){
          if(response.data.length){
            BuzzHome.buzzs = response.data
          }
        });
    }


    refresh();

    $scope.minLimit=2;
    $scope.readmore=function(){
      $scope.maxLimit = 10000;
    };
    $scope.categoryFilter = function(buzz) {
    }



    $scope.postd.name=$scope.getCurrentUser().name;
    $scope.postd.email=$scope.getCurrentUser().email;



    console.log("hello")
    $scope.postfunc=function(){
      console.log($scope.postd);
      $scope.postd.name=$scope.getCurrentUser().name;
      $scope.postd.email=$scope.getCurrentUser().email;

      $http.post("/api/posts", $scope.postd).success(function(response){
        //console.log(response);
        //console.log($scope.postd.likes);
        refresh();

      })
    }



    $scope.count = function (value) {
      console.log(value);
      value=value+1;
      console.log(value);
      var data = $.param({
        likes: value
      });


      console.log(BuzzHome.buzzs[0].likes);


      console.log(BuzzHome.buzzs[0]._id);
      $http.put('/api/posts/'+$scope.BuzzHome.buzzs._id+ $scope.BuzzHome.buzzs)
        .success(function (data, status, headers) {
          $scope.ServerResponse = data;
          //console.log(data);
          refesh();
        })
        .error(function (data, status, header, config) {
        });
    };
  });
