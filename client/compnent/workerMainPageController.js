app.controller('workerMainPageController', function($scope, $http, $log, $location) {
	$scope.engName = 'hi';
	$scope.fullName = '';
	$scope.expectedSalary = '';
	$scope.experienceLevel = '';
	$scope.phoneNumber = '';
	$scope.url = 'https://cdn0.iconfinder.com/data/icons/flat-vector-2/100/77-Under_Construction-512.png';
	const token = localStorage.getItem('token');
	//   const successCallBackEngName = response => {
	//     $scope.engName = response.data.engineerName;
	//     $log.info(response);
	//   };
	const successCallBackWorkerPage = (response) => {
		$scope.phoneNumber = response.data.phoneNumber;
		$scope.fullName = response.data.fullName;
		$scope.experienceLevel = response.data.experienceLevel;
		$scope.expectedSalary = response.data.expectedSalary;
		$scope.url =
			response.data.url ||
			'https://cdn0.iconfinder.com/data/icons/flat-vector-2/100/77-Under_Construction-512.png';
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

	workerPage();
});

// app.controller('workerMainPageController', function($scope, $http, $log) {
// 	$scope.fullName = '';
// 	$scope.expectedSalary = '';
// 	$scope.experienceLevel = '';
// 	$scope.phoneNumber = '';
// 	$scope.url =
// 		'https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435';
// 	$scope.reqMessage = '';
// 	$scope.request = true;
// 	const token = localStorage.getItem('token');
// 	const successCallBackEngName = (response) => {
// 		$scope.engName = response.data.engineerName;
// 		$log.info(response);
// 	};
// 	const successCallBackWorkerPage = (response) => {
// 		$scope.phoneNumber = response.data.fullName;
// 		$scope.fullName = response.data.fullName;
// 		$scope.experienceLevel = response.data.experienceLevel;
// 		$scope.expectedSalary = response.data.expectedSalary;
// 		$scope.url =
// 			response.data.url ||
// 			'https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435';
// 		$log.info(response);
// 	};
// 	const errorCallBack = (response) => {
// 		$scope.error = response.data;
// 	};
// 	const workerPage = () => {
// 		$http({
// 			method: 'GET',
// 			headers: {
// 				'x-access-token':
// 					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InciLCJyb2xlIjoiU21pdGgiLCJpYXQiOjE1NTkwNzkzNjAsImV4cCI6MTU1OTA4ODM2MH0.wK1E0RHpAePmy0oc1cm3VAiQt5mw0yjab2Mc8swu3KY'
// 			},
// 			url: '/workerPage'
// 		}).then(successCallBackWorkerPage, errorCallBack);
// 		// $http('/workerPage',).then(successCallBack,errorCallBack)
// 	};
// 	const gitEngName = () => {
// 		$http({
// 			method: 'get',
// 			headers: {
// 				'x-access-token':
// 					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InciLCJyb2xlIjoiU21pdGgiLCJpYXQiOjE1NTkwNzkzNjAsImV4cCI6MTU1OTA4ODM2MH0.wK1E0RHpAePmy0oc1cm3VAiQt5mw0yjab2Mc8swu3KY'
// 			},
// 			url: '/workerMainPage'
// 		}).then(successCallBackEngName, errorCallBack);
// 	};
// 	$scope.checkRequest = () => {
// 		if ($scope.engName) {
// 			$scope.reqMessage = `you have request from ${$scope.engName} , check your mobile and then please click on `;
// 		} else {
// 			$scope.reqMessage = `you dont have any request yet,`;
// 			$scope.request = false;
// 		}
// 		$log.info('hello');
// 		$log.info($scope.request);
// 	};
// 	$scope.checkRequest();
// 	workerPage();
// 	gitEngName();
