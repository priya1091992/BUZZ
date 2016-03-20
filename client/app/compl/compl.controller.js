'use strict';

angular.module('projectAppApp')
  .controller('ComplCtrl',  ['$scope', '$http', 'Auth', 'ComplApi','User', function ($scope, $http, Auth,ComplApi, User) {
    $scope.message = 'Hello';

    var Complaint=this;
    Complaint.newCompl = {};
    Complaint.compl = [];
    Complaint.newCompl.isLoggedIn = Auth.isLoggedIn;
    Complaint.newCompl.isAdmin = Auth.isAdmin;
    Complaint.newCompl.getCurrentUser = Auth.getCurrentUser;
    Complaint.newCompl.user=Complaint.newCompl.getCurrentUser().name;
    Complaint.newCompl.email=Complaint.newCompl.getCurrentUser().email;
    var user=Complaint.newCompl.email;

    Complaint.users=[];
    User.getall( function (data) {
      Complaint.users=data;
    });



    $scope.closedCompl=[];

//for posting an image
    Complaint.imageComplPost=function(){
      var photo = document.getElementById("compl_photo");
      var file = photo.files[0];
      var fd = new FormData();
      fd.append('file', file);
      $http.post('/images/uploads', fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
      }).success(function (data) {
        if(data.id===undefined){
          BuzzHome.newBuzz.media_url=' ';
        }
        else {
          var a = "../uploads/" + data.id;
          BuzzHome.newBuzz.media_url = a;
        }
      })
    }


    var size;
    Complaint.compl=[];
    Complaint.isLoading=false;
    Complaint.hasMore=true;
    var limit=4;
    var offset =0;

    //for get data on scrolling
    Complaint.scrollFunction=function(){
      if(!Complaint.isLoading && Complaint.hasMore){
        Complaint.isLoading = true;

        if(Complaint.newCompl.getCurrentUser().role=='user'){
          ComplApi.Compllist({offset: offset, limit:limit, user:user},function(data){
            offset =offset +  data.length
            if(Complaint.compl && Complaint.compl.length){
              Complaint.compl = Complaint.compl.concat(data);
            }else{
              Complaint.compl = data;
            }
            if(data.length < limit){
              Complaint.hasMore = false;
            }
            Complaint.isLoading = false;
          });
        }
        else{
          ComplApi.Compllist({offset: offset, limit:limit},function(data){
            offset =offset +  data.length
            if(Complaint.compl && Complaint.compl.length){
              Complaint.compl = Complaint.compl.concat(data);
            }else{
              Complaint.compl = data;
            }
            if(data.length < limit){
              Complaint.hasMore = false;
            }
            Complaint.isLoading = false;
          });
        }}
    }


//save data in database
    var fd=Complaint.newCompl;
    $scope.complfunc=function() {
      ComplApi.addCompl(fd, function (data) {
        Complaint.compl.unshift(data);
        Complaint.newCompl.image_url = " "
      });
    }

//for changing the status of complaint
    Complaint.changeStatus = function (id,Index,option,assignedto) {
      if(assignedto != Complaint.compl[Index].user){
      var obj = {
        id: id,
        option: option,
        assign:assignedto
      }
      $http.put("/api/tickets/" + id, obj)
        .success(function (data) {
          Complaint.compl[Index] = data;
        })
        .error(function (data) {
          console.log('Error: ' + data);
        });
     }

      else{
      alert("This complaint can not assign to "+ Complaint.compl[Index].user + "\n"+ "Please assign to somebody else");
     }
    }


    Complaint.showDetails=function(index){
      var issueDate=Complaint.compl[index].issue_date.split("T");
      alert("Name: "+ Complaint.compl[index].user + "\n" + "Email:"+ Complaint.compl[index].email
      + "\n" +"Title: "+ Complaint.compl[index].title + "\n" +"Concern: "+ Complaint.compl[index].concern + "\n"
      +"Issue Date: "+ issueDate[0] + "\n");

    }

  }]);
