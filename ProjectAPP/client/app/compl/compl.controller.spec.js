'use strict';

describe('Controller: ComplCtrl', function () {

  // load the controller's module
  beforeEach(module('projectAppApp'));

  var ComplCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComplCtrl = $controller('ComplCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
