// import storage from '/Users/rbk-9/Desktop/Construction-Workers-Hub/client_react/firebase';

//worker Signup Controller
app.controller('workerSignup', [
	'$scope',
	'$http',
	'$firebaseStorage',
	'$firebaseObject',
	'$location',
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
		$scope.url = '' || 'https://cdn0.iconfinder.com/data/icons/flat-vector-2/100/77-Under_Construction-512.png';
		$scope.handleChange = (e) => {
			if (e.target.files[0]) {
				const image = e.target.files[0];
				console.log(image);
			}
		};
// upload the image
		
		$scope.handleUpload = () => {
			const { image } = this.state;
			const uploadTask = storage.ref(`images/${image.name}`).put(image);
			uploadTask.on(
				`state_changed`,
				(snapshot) => {
					const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
				},
				(error) => {},
				() => {
					storage.ref(`images`).child(image.name).getDownloadURL().then((url) => {
						console.log(url);
						$scope.url = url;
					});
				}
			);
		};
// define the sign up data
		$scope.signUp = () => {
			
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
			
//send the data to the server
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
