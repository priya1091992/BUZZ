'use strict';

describe('Controller: LostFoundCtrl', function () {

  // load the controller's module
  beforeEach(module('projectAppApp'));

  var LostFoundCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LostFoundCtrl = $controller('LostFoundCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
