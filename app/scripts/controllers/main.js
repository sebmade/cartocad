'use strict';

cartocadApp.controller('MainCtrl', function($scope, $http) {
  $http.get("data/articles.json").success(function(data) {
    $scope.articles = data;
  });
  $scope.cart = [];
  $scope.addToCart = function(article) {
    $scope.cart.push(article);
  };
  $scope.total = function() {
    return _.reduce($scope.cart, function(memo, a){ return memo + parseFloat(a.price); }, 0);
  }
});
