'use strict';


angular.module('projectAppApp')
  .controller('BuzzCtrl', ['$scope', '$http', 'Auth', 'BuzzApi',  function ($scope, $http, Auth,BuzzApi) {
    var abc = this;
    abc.newBuzz = {};
    abc.buzzs = [];
    abc.newBuzz.category='BUZZ';
    abc.newBuzz.isLoggedIn = Auth.isLoggedIn;
    abc.newBuzz.isAdmin = Auth.isAdmin;
    abc.newBuzz.getCurrentUser = Auth.getCurrentUser;

    abc.Category = function(categ){
      abc.newBuzz.category = categ;
      if(categ == 'BUZZ'){
        this.newBuzz.cat='BUZZ';
        this.newBuzz.header='';
      }else{
        this.newBuzz.cat='Lost & Found';
        this.newBuzz.header="Lost and Found";
      }
    }

    abc.newBuzz.name=abc.newBuzz.getCurrentUser().name;
    abc.newBuzz.email=abc.newBuzz.getCurrentUser().email;

    abc.imagePost=function(){
      var photo = document.getElementById("photo");
      var file = photo.files[0];
      var fd = new FormData();
      fd.append('file', file);
      $http.post('/images/uploads', fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
      }).success(function (data) {
        if(data.id===undefined){
          abc.newBuzz.media_url=' ';
        }
        else {
          var a = "../uploads/" + data.id;
          abc.newBuzz.media_url = a;
        }
      })
    }


    var size;
    abc.buzzs=[];
    abc.isLoading=false;
    abc.hasMore=true;
    var limit=4;
    var off =0;

    abc.pagingFunction=function(){
      if(!abc.isLoading && abc.hasMore){
        abc.isLoading = true;

        BuzzApi.list({off: off, limit:limit},function(data){
          off =off +  data.length
          if(abc.buzzs && abc.buzzs.length){
            abc.buzzs = abc.buzzs.concat(data);
            //console.info("after", abc.buzzs.length)
          }else{
            abc.buzzs = data;
          }
          if(data.length < limit){
            abc.hasMore = false;
          }
          abc.isLoading = false;
        });
      }
    }

var fd=abc.newBuzz;

    $scope.postfunc=function() {
      BuzzApi.addBuzz(fd, function (data) {
        abc.buzzs.unshift(data);
      });
    }



   $scope.minlength=6;
    $scope.cal=function(index){
      abc.buzzs[index].readmore =function(){
        abc.buzzs[index].flag=true;
        abc.buzzs[index].minlength=1000;
    }
      abc.buzzs[index].readmore();

    }





    abc.count = function (id, choice, postIndex) {
      var obj={
        id:id,
        choice:choice,
        currentUser:abc.newBuzz.name
      }
      $http.put("/api/posts/" + id,obj)
        .success(function(data) {
          abc.buzzs[ postIndex] = data;
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    }

  }]);
