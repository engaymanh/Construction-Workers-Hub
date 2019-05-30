// const { storage } = require('../../client_react/firebase');
app.controller('signupEng', [
	'$scope',
	'$http',
	'$firebaseStorage',
	'$firebaseObject',
	function($scope, $http, $firebaseStorage, $firebaseObject) {
		$scope.fullName = '';
		$scope.username = '';
		$scope.password = '';
		$scope.sitelocation = '';
		$scope.phonenumber = '';
		$scope.toggleSignUp = '';
		$scope.toggleSignIn = '';
		$scope.image = '';
		$scope.url =
			'' ||
			'https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435';

		$scope.onChange = function onChange(fileList) {
			$scope.image = fileList[0];

			$scope.upload = function() {
				if ($scope.image) {
					let storageRef = firebase.storage().ref(`images/` + $scope.image.name);
					let storage = $firebaseStorage(storageRef);
					let uploadTask = storage.$put($scope.image);
					uploadTask.$complete((snapshot) => {
						let ref = firebase.database().ref('Files');
						let pushKey = ref.push().key;
						let formData = $firebaseObject(ref.child(pushKey));
						formData.name = $scope.image.name;
						formData.timestamp = firebase.database.ServerValue.TIMESTAMP;
						formData.url = snapshot.downloadURL;
						$scope.url = formData.url;
						formData.$save().then(() => {
							// angular.element("input[type='file']").val(null);
							$scope.image = null;
						});
					});
				}
			};
		};

		$scope.engineerSignUp = () => {
			console.log('engineer');
			var {
				fullName,
				username,
				password,
				sitelocation,
				phonenumber,
				toggleSignUp,
				toggleSignIn,
				image,
				url
			} = $scope;
			var engineer = {
				fullName,
				username,
				password,
				sitelocation,
				phonenumber,
				toggleSignUp,
				toggleSignIn,
				image,
				url
			};
			console.log(engineer);
			$http.post('/signupEngineer', engineer).then(
				(result) => {
					console.log(result.data);
				},
				(err) => {
					console.log(err.data);
				}
			);
		};
	}
]);
// var that = this;
// fetch('/signupEngineer', {
// 	method: 'POST',
// 	body: JSON.stringify(engineer),
// 	headers: {
// 		'Content-Type': 'application/json'
// 	}
// })
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((response) => {
// 		if (response.success === 'Sign up as engineer successful') {
// 			that.setState({
// 				username: '',
// 				password: '',
// 				toggleSignIn: true,
// 				toggleSignUp: false
// 			});
// 			console.log(response.success);
// 		} else {
// 			console.log(response.error);
// 		}
// 	});
