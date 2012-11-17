'use strict';

describe('Directive: pie', function() {
  beforeEach(module('cartocadApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<pie></pie>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the pie directive');
  }));
});
