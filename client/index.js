var app = angular.module("app", ["ngRoute", "firebase"]);
app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "./compnent/homehtml.html",
      controller: "testctrl"
    })
    .when("/signup", {
      templateUrl: "./compnent/signup.html",
      controller: "signup"
    })
    .when("/signupEng", {
      templateUrl: "./compnent/signupEng.html",
      controller: "signupEng"
    })
    .when("/WorkerProfile/:id", {
      templateUrl: "./compnent/WorkerProfile.html",
      controller: "WorkerProfile"
    })
    .when("/workerscategory", {
      templateUrl: "./compnent/workerscategory.html",
      controller: "workerscategory"
    });
});
app.service("worker_id_service", function() {
  var worker_id;
});
