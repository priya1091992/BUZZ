/**
 * Created by priya on 2/3/16.
 */
angular.module('projectAppApp')
  .factory('BuzzApi', ['$resource',function ($resource) {
    return $resource('/api/posts/:id/:controller', {
        id: '@_id'
      },
      {
        list: {
          method: 'GET',
          isArray:true,
          params: {

          }
        },
        addBuzz: {
          method: 'POST',
          params: {

          }
        }
      });
  }]);
