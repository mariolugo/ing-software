'use strict';

describe('Controller: CrearempresaCtrl', function () {

  // load the controller's module
  beforeEach(module('trabajoApp'));

  var CrearempresaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CrearempresaCtrl = $controller('CrearempresaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CrearempresaCtrl.awesomeThings.length).toBe(3);
  });
});
