var app = angular.module('app', [ 'ngRoute' ]);
app.config(function($routeProvider) {
	$routeProvider
		.when('/signup', {
			templateUrl: './compnent/signup.html',
			controller: 'signupController'
		})
		.when('/', {
			templateUrl: './compnent/homehtml.html',
			controller: 'homeController'
		})
		.when('/workerPage', {
			templateUrl: './compnent/workerMainPage.html',
			controller: 'workerMainPageController'
		});
});
