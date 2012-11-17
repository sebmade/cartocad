'use strict';

cartocadApp.directive('pie', function() {
  return {
    template: '<span></span>',
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
      element.peity("pie", {
        colours: function() {
          return ["#dddddd", "#E85925"];
        },
        diameter: function() {
          return "120";
        }
      });
      scope.$watch("pieValue", function() {
        element.text(scope.pieValue+"/"+scope.pieTotal).change();
      });
    }
  };
});
