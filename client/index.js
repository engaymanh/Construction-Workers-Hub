var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
    .when("/signup", {
      templateUrl: "./compnent/signup.html",
      controller: "signupController"
    })
    .when("/WorkerProfile/:id", {
      templateUrl: "./compnent/WorkerProfile.html",
      controller: "WorkerProfile"
    })
    .when("/workerscategory", {
      templateUrl: "./compnent/workerscategory.html",
      controller: "workerscategory"
    })
    .when("/", {
      templateUrl: "./compnent/homehtml.html",
      controller: "homeController"
    });
});
app.service("worker_id_service", function() {
  var worker_id;
});
