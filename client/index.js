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
		});
});
app.controller('workerSignup', function($scope) {
	$scope.msg = 'Hello hard worker';
	$scope.username = '';
	$scope.password = '';
	$scope.fullName = '';
	$scope.phoneNumber = '';
	$scope.toggleSignIn = true;
	$scope.toggleWorkerpage = false;
	$scope.experienceLevel = '';
	$scope.expectedSalary = '';
	$scope.role = '';
	$scope.status = '';
	$scope.url = '';
});
