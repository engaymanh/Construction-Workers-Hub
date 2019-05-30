app.controller("workerSignin", function($scope, $http, $location) {
  $scope.msg = "Hello hard worker";
  $scope.username = "";
  $scope.password = "";
  $scope.fullName = "";
  $scope.phoneNumber = "";
  $scope.toggleSignIn = true;
  $scope.toggleWorkerpage = false;
  $scope.experienceLevel = "";
  $scope.expectedSalary = "";
  $scope.role = "";
  $scope.status = "";
  $scope.url = "";

  $scope.signIn = () => {
    console.log("jjjjjj");
    var { username, password } = $scope;
    var worker = { username, password };
    $http({
      method: "POST",
      url: "/signinWorker",
      data: JSON.stringify(worker),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function successCallback(response) {
      if (response.status == 200) {
        const token = response.token;
        localStorage.setItem("token", token);
        $scope.username = "";
        $scope.password = "";
        $location.path("/workerPage");
      }
    });
  };

  // $scope.workerPage = () => {
  //   const token = localStorage.getItem("token");
  //   $http({
  //     method: "GET",
  //     url: "/workerPage",
  //     headers: { "x-access-token": token }
  //   }).then(function successCallback(response) {
  //     if (response.status == 200) {
  //       $scope.fullName = response.fullName;
  //       $scope.phoneNumber = response.phoneNumber;
  //       $scope.experienceLevel = response.experienceLevel;
  //       $scope.expectedSalary = response.expectedSalary;
  //       $scope.role = response.role;
  //       $scope.status = response.status;
  //       $scope.url = response.url;
  //     }
  //   });
  // };
});
