// import storage from '/Users/rbk-9/Desktop/Construction-Workers-Hub/client_react/firebase';

app.controller('workerSignup', [
	'$scope',
	'$http',
	'$firebaseStorage',
	'$firebaseObject',
	function($scope, $http, $location, $firebaseStorage, $firebaseObject) {
		$scope.fullname = '';
		$scope.username = '';
		$scope.password = '';
		$scope.phonenumber = '';
		$scope.experiencelevel = '';
		$scope.expectedsalary = '';
		$scope.role = '';
		$scope.toggleSignUp = true;
		$scope.toggleSignIn = false;
		$scope.status = '';
		$scope.image = null;
		$scope.url =
			'' ||
			'https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435';

		$scope.signUp = () => {
			console.log('hhhhhh');
			var {
				fullname,
				username,
				password,
				phonenumber,
				experiencelevel,
				expectedsalary,
				role,
				status,
				url
			} = $scope;
			var info = {
				fullname,
				username,
				password,
				phonenumber,
				experiencelevel,
				expectedsalary,
				role,
				status,
				url
			};
			console.log(info);
			$http.post('/signupWorker', { info }).then(
				(result) => {
					console.log(result.data);
					$location.path('/workerSignin');
				},
				(error) => {
					console.log('error');
				}
			);
		};

		$scope.show = () => {
			let that = this;
			let mess = 'hello';
			new Noty({
				text: mess
			}).show();
		};
		$scope.onChange = function onChange(fileList) {
			$scope.image = fileList[0];

			$scope.upload = function() {
				console.log('hhhhh');
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
	}
]);
