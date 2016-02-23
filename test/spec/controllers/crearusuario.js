'use strict';

describe('Controller: CrearusuarioCtrl', function () {

  // load the controller's module
  beforeEach(module('trabajoApp'));

  var CrearusuarioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CrearusuarioCtrl = $controller('CrearusuarioCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CrearusuarioCtrl.awesomeThings.length).toBe(3);
  });
});
