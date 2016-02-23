'use strict';

describe('Controller: VerempresaCtrl', function () {

  // load the controller's module
  beforeEach(module('trabajoApp'));

  var VerempresaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VerempresaCtrl = $controller('VerempresaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VerempresaCtrl.awesomeThings.length).toBe(3);
  });
});
