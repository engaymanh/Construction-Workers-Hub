// signup engineer controller
app.controller('signupEng', [
	'$scope',
	'$http',
	'$firebaseStorage',
	'$firebaseObject',
	
	// define the main info for the engineer
	function($scope, $http, $firebaseStorage, $firebaseObject) {
		$scope.fullName = '';
		$scope.username = '';
		$scope.password = '';
		$scope.sitelocation = '';
		$scope.phonenumber = '';
		$scope.toggleSignUp = '';
		$scope.toggleSignIn = '';
		$scope.image = '';
		$scope.url = '' || 'https://cdn0.iconfinder.com/data/icons/flat-vector-2/100/77-Under_Construction-512.png';
		$scope.onChange = function onChange(fileList) {
			$scope.image = fileList[0];

			// upload the image in firbase
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
			
			// send the data to server
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
