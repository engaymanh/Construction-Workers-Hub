var app = angular.module('app', [ 'ngRoute', 'firebase' ]);
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
		.when('/signupEng', {
			templateUrl: './compnent/signupEng.html',
			controller: 'signupEng'
		})
		.when('/workerPage', {
			templateUrl: './compnent/workerMainPage.html',
			controller: 'workerMainPageController'
		});
});

app.controller('testctrl', function($scope) {
	$scope.msg = 'homeeeeeeeee';
});
app.controller('signup', function($scope) {
	$scope.msg = 'signup';
});
