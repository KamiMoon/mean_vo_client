'use strict';

describe('Controller: OpportunitiesCtrl', function () {

  // load the controller's module
  beforeEach(module('meanVoApp'));

  var OpportunitiesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OpportunitiesCtrl = $controller('OpportunitiesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OpportunitiesCtrl.awesomeThings.length).toBe(3);
  });
});
