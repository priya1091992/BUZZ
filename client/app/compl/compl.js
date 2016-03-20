'use strict';

angular.module('projectAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.compl', {
        url: '/compl',
        templateUrl: 'app/compl/compl.html',
        controller: 'ComplCtrl as Complaint'
      })
      .state('home.compl.logcompl', {
        url:'/logcompl',
        templateUrl:'app/compl/logcompl.html',
        controller: 'ComplCtrl as Complaint'
      })
    .state('home.compl.postcompl',{
       url:'/postComplaint',
        templateUrl: 'app/compl/postComplaint.html'

      })

      .state('home.compl.managecompl', {
        url:'/managecompl',
        templateUrl:'app/compl/managecompl.html'
      })
  });
