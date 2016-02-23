'use strict';

describe('Controller: AsignarusuarioCtrl', function () {

  // load the controller's module
  beforeEach(module('trabajoApp'));

  var AsignarusuarioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AsignarusuarioCtrl = $controller('AsignarusuarioCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AsignarusuarioCtrl.awesomeThings.length).toBe(3);
  });
});
