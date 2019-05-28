// import storage from '/Users/rbk-9/Desktop/Construction-Workers-Hub/client_react/firebase';

app.controller('workerSignup', function($scope, $http) {
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

	$scope.handleChange = function(e) {
		if (e.target.files[0]) {
			const image = e.target.files[0];
			console.log(image);
		}
	};

	$scope.handleUpload = function() {
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

	$scope.signUp = function() {
		console.log('hhhhhh');
		var { fullname, username, password, phonenumber, experiencelevel, expectedsalary, role, status, url } = $scope;
		var info = { fullname, username, password, phonenumber, experiencelevel, expectedsalary, role, status, url };
		console.log(info);
		$http.post('/signupWorker', { info }).then(
			(result) => {
				console.log(result.data);
			},
			(error) => {
				console.log('error');
			}
		);
	};

	$scope.show = function() {
		let that = this;
		let mess = 'hello';
		new Noty({
			text: mess
		}).show();
	};
});
