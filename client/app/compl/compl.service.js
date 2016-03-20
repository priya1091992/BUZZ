/**
* Created by priya on 2/3/16.
*/

angular.module('projectAppApp')
  .factory('ComplApi', function ($resource) {
    return $resource('/api/tickets/:id/:controller', {
        id: '@_id'
      },
      {
        Compllist: {
          method: 'GET',
          isArray:true,
          params: {

          }
        },
        addCompl: {
          method: 'POST',
          params: {

          }
        }


      });
  });
