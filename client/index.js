var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
    .when("/home", {
      templateUrl: "./compnent/homehtml.html",
      controller: "testctrl"
    })
    .when("/test", {
      templateUrl: "./compnent/test.html",
      controller: "testctrl2"
    });
});
app.controller("testctrl2", function($scope) {
  $scope.msg = "test";
});
app.controller("testctrl", function($scope) {
  $scope.msg = "homeeeeeeeee";
});
