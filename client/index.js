var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
    .when("/signup", {
      templateUrl: "./compnent/signup.html",
      controller: "signupController"
    })
    .when("/WorkerProfile", {
      templateUrl: "./compnent/WorkerProfile.html",
      controller: "WorkerProfile"
    })
    .when("/", {
      templateUrl: "./compnent/homehtml.html",
      controller: "homeController"
    });
});
