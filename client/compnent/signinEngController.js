app.controller('signupEng', [
	'$scope',
	'$http',
	function($scope, $http) {
		$scope.username = '';
		$scope.password = '';
		$scope.fullName = '';
		$scope.phoneNumber = '';
		$scope.toggleSignIn = true;
		$scope.toggleEngpage = false;
		$scope.siteLocation = '';
		$scope.url = '';

		$scope.engineerSignIn = function() {
			var { username, password } = $scope;
			var engineer = { username, password };
			console.log($scope.username, '  ', $scope.password);
			$http.post('/signinEngineer', JSON.stringify(engineer)).then(
				(data) => {
					console.log(data, 'data');
					if (data.status == 200) {
						data.json().then((result) => {
							const token = body.token;
							localStorage.setItem('token', token);
							$scope.username = '';
							$scope.password = '';
							$scope.toggleSignIn = false;
							$scope.toggleEngpage = true;
							$scope.engineerPage();
						});
					} else {
						console.log('errrrrror');
					}
				},
				(err) => console.log(err)
			);
		};
		$scope.engineerPage = function() {
			const token = localStorage.getItem('token');
			console.log(token);
			$http.get('/engineerPage', { headers: { 'x-access-token': token } }).then(
				(response) => {
					if (response.status == 200) {
						response.json().then((body) => {
							console.log('hi');
							$scope.fullName = body.fullName;
							$scope.username = body.userName;
							$scope.phoneNumber = body.phoneNumber;
							$scope.siteLocation = body.siteLocation;
							$scope.url = body.url;
						});
					} else {
						response.then((error) => {
							console.log(error);
						});
					}
				},
				(err) => console.log(err)
			);
		};
	}
]);
