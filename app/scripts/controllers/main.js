'use strict';

cartocadApp.controller('MainCtrl', function($scope, $http) {
  $http.get("/data/articles.json").success(function(data) {
    $scope.articles = data;
  });
});
