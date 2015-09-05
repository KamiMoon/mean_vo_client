'use strict';

describe('Directive: bNavBar', function () {

  // load the directive's module
  beforeEach(module('meanVoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<b-nav-bar></b-nav-bar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bNavBar directive');
  }));
});
