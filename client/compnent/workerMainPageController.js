// get the profile info for the worker

app.controller("workerMainPageController", function(
  $scope,
  $http,
  $log,
  $location
) {
  $scope.engName = "hi";
  $scope.fullName = "";
  $scope.expectedSalary = "";
  $scope.experienceLevel = "";
  $scope.phoneNumber = "";
  $scope.url =
    "https://cdn0.iconfinder.com/data/icons/flat-vector-2/100/77-Under_Construction-512.png";
  // read the token
  const token = localStorage.getItem("token");
 
  const successCallBackWorkerPage = response => {
    $scope.phoneNumber = response.data.phoneNumber;
    $scope.fullName = response.data.fullName;
    $scope.experienceLevel = response.data.experienceLevel;
    $scope.expectedSalary = response.data.expectedSalary;
    $scope.url =
      response.data.url ||
      "https://cdn0.iconfinder.com/data/icons/flat-vector-2/100/77-Under_Construction-512.png";
    $log.info(response);
  };
  const errorCallBack = response => {
    $scope.error = response.data;
  };
  
  // fetch the data
  const workerPage = () => {
    $http({
      method: "GET",
      headers: {
        "x-access-token": token
      },
      url: "/workerPage"
    }).then(successCallBackWorkerPage, errorCallBack);
   
  };

  workerPage();
});
