// workers category controller
app.controller("workerscategory", function(
  $scope,
  $http,
  $location,
  worker_id_service
) {
  $scope.fullName = "";
  $scope.userName = "";
  $scope.phoneNumber = "";
  $scope.siteLocation = "";
  $scope.users = [];
  get_workers = function() {
    console.log("fffff");
    $http({
      method: "get",
      url: `/engineerworker`,
      headers: { "Content-Type": "application/json; charset = utf-8" }
    })
      .then(function(data) {
        console.log(data);
        $scope.users = data.data;
        // console.log($scope.userProfile);
      })
      .catch(err => {
        console.log(err);
      });
  };
  get_workers();
  $scope.showProfile = function(id) {
    console.log(id);
    worker_id_service.worker = $scope.users[id];
    $location.path("/WorkerProfile/" + worker_id_service.worker.id);
  };
});
