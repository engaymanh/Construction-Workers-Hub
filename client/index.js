var app = angular.module('app', [ 'ngRoute', 'firebase' ]);
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './compnent/homehtml.html',
			controller: 'homeController'
		})
		.when('/workerSignup', {
			templateUrl: './compnent/workerSignup.html',
			controller: 'workerSignup'
		})
		.when('/workerSignin', {
			templateUrl: './compnent/workerSignin.html',
			controller: 'workerSignin'
		})
		.when('/WorkerProfile/:id', {
			templateUrl: './compnent/WorkerProfile.html',
			controller: 'WorkerProfile'
		})
		.when('/workerscategory', {
			templateUrl: './compnent/workerscategory.html',
			controller: 'workerscategory'
		})
		.when('/workerPage', {
			templateUrl: './compnent/workerMainPage.html',
			controller: 'workerMainPageController'
		})
		.when('/engPage', {
			templateUrl: './compnent/engPage.html',
			controller: 'signinEng'
		})
		.when('/about', {
			templateUrl: './compnent/about.html',
			controller: 'aboutController'
		})
		.when('/signupEng', {
			templateUrl: './compnent/signupEng.html',
			controller: 'signupEng'
		})
		.when('/signinEng', {
			templateUrl: './compnent/signinEng.html',
			controller: 'signinEng'
		});
});
app.service('worker_id_service', function() {
	var worker_id;
});
