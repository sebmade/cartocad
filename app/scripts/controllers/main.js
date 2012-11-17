'use strict';

cartocadApp.controller('MainCtrl', function($scope, $http, $document) {
  $http.get("data/articles.json").success(function(data) {
    $scope.articles = data;
  });
  $scope.cart = [];
  $scope.addToCart = function(article) {
    $scope.cart.push(article);
    $scope.pieValue += article.from;
    $scope.note += article.note;
  };
  $scope.total = function() {
    return _.reduce($scope.cart, function(memo, a){ return memo + parseFloat(a.price); }, 0);
  };
  $scope.pieValue = 0;
  $scope.pieTotal = 90;
  $scope.note = 0;
  $scope.showAltDiv = false;
  $scope.switch = function(article) {
    $scope.note -= $scope.cart[$scope.indexToSwitch].note;
    $scope.cart[$scope.indexToSwitch] = article;
    $scope.pieValue += article.from;
    if ($scope.pieValue == 99) {
      $scope.pieValue = 100;
    }
    $scope.note += article.note;
    $scope.showAltDiv = false;
  };
  $scope.showPin = function(article) {
    return article.pin;
  };
  $scope.showAlt = function(article, index) {
    $scope.alts = [
      {
        "name":"1664",
        "mark":"Bière blonde",
        "price":"5.09",
        "img":"/images/articles/m_00100732.gif",
        "id":"100732",
        "from":30,
        "note":10,
        "pin":false
      },
      {
        "name":"KRONENBOURG",
        "mark":"Bière blonde",
        "price":"4.53",
        "img":"/images/articles/m_00100806.gif",
        "id":"100806",
        "from":33,
        "note":15,
        "pin":false
      },
      {
        "name":"JADE",
        "mark":"Bière blonde",
        "price":"6.99",
        "img":"/images/articles/m_00060789.gif",
        "id":"60789",
        "from":30,
        "note":15,
        "pin":false
      }
    ];
    $scope.articleToSwitch = article;
    $scope.indexToSwitch = index;
    $scope.showAltDiv = true;
  };
});
