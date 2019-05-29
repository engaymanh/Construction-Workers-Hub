app.controller('workerSignin', function($scope, $http, $location) {
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

	$scope.signIn = () => {
		var { username, password } = $scope;
		var worker = { username, password };
		console.log(worker);
		$http({
			method: 'POST',
			url: '/signinWorker',
			data: JSON.stringify(worker),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(function successCallback(response) {
				console.log('hi');
				if (response.status == 200) {
					const token = response.data.token;
					console.log(response);
					localStorage.setItem('token', token);
					$scope.username = '';
					$scope.password = '';
					$location.path('/workerPage');
				}
			})
			.catch(function errorCallback(response) {
				console.log('err');
			});
	};

	// $scope.workerPage = () => {
	// 	const token = localStorage.getItem('token');
	// 	$http({
	// 		method: 'GET',
	// 		url: '/workerPage',
	// 		headers: { 'x-access-token': token }
	// 	}).then(function successCallback(response) {
	// 		if (response.status == 200) {
	// 			response.json().then((body) => {
	// 				$scope.fullName = body.fullName;
	// 				$scope.phoneNumber = body.phoneNumber;
	// 				$scope.experienceLevel = body.experienceLevel;
	// 				$scope.expectedSalary = body.expectedSalary;
	// 				$scope.role = body.role;
	// 				$scope.status = body.status;
	// 				$scope.url = body.url;
	// 			}),
	// 				function errorCallback(response) {
	// 					console.log('err');
	// 				};
	// 		}
	// 	});
	// };
});
