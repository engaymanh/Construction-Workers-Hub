app.controller('workerMainPageController', function($scope, $http, $log) {
	$scope.engName = 'hi';
	$scope.fullName = '';
	$scope.expectedSalary = '';
	$scope.experienceLevel = '';
	$scope.phoneNumber = '';
	$scope.url =
		'https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435';
	const token = localStorage.getItem('token');
	const successCallBackEngName = (response) => {
		$scope.engName = response.data.engineerName;
		$log.info(response);
	};
	const successCallBackWorkerPage = (response) => {
		$scope.phoneNumber = response.data.fullName;
		$scope.fullName = response.data.fullName;
		$scope.experienceLevel = response.data.experienceLevel;
		$scope.expectedSalary = response.data.expectedSalary;
		$scope.url =
			response.data.url ||
			'https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435';
		$log.info(response);
	};
	const errorCallBack = (response) => {
		$scope.error = response.data;
	};
	const workerPage = () => {
		$http({
			method: 'GET',
			headers: {
				'x-access-token': token
			},
			url: '/workerPage'
		}).then(successCallBackWorkerPage, errorCallBack);
		// $http('/workerPage',).then(successCallBack,errorCallBack)
	};
	// const gitEngName = () => {
	// 	$http({
	// 		method: 'get',
	// 		headers: {
	// 			'x-access-token': token
	// 		},
	// 		url: '/workerMainPage'
	// 	}).then(successCallBackEngName, errorCallBack);
	// };
	workerPage();
	// gitEngName();
});
