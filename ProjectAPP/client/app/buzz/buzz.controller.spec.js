'use strict';

describe('Controller: BuzzCtrl', function () {

  // load the controller's module
  beforeEach(module('projectAppApp'));

  var BuzzCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BuzzCtrl = $controller('BuzzCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
