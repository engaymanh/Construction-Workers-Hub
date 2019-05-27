var app = angular.module('app', [ 'ngRoute' ]);
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './compnent/homehtml.html',
			controller: 'testctrl'
		})
		.when('/signup', {
			templateUrl: './compnent/signup.html',
			controller: 'signup'
		})
		.when('/workerSignup', {
			templateUrl: './compnent/workerSignup.html',
			controller: 'workerSignup'
		});
});

// app.controller('testctrl', function($scope) {
// 	$scope.msg = 'homeeeeeeeee';
// });
// app.controller('signup', function($scope) {
// 	$scope.msg = 'signup';
// });
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
