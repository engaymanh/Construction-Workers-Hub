app.controller("WorkerProfile", function($scope, $http) {
  $scope.worker_id = $scope.$parent.worker_id || 1;
  $scope.number = "";
  $scope.msg = "";
  $scope.userProfile = {
    fullName: "",
    experienceLevel: "",
    expectedSalary: "",
    phoneNumber: "",
    status: "",
    role: ""
  };
  get_worker_profile = function() {
    console.log("gggg");
    $http({
      method: "get",
      url: `/engineerworker/${$scope.worker_id}`,
      headers: { "Content-Type": "application/json; charset = utf-8" }
    }).then(function(data) {
      // console.log(data);
      $scope.userProfile = data.data[0];
      // console.log($scope.userProfile);
    });
  };
  get_worker_profile();
  $scope.pick_worker = function() {};
  $scope.book = function() {
    if ($scope.userProfile.status === "not Available") {
      alert($scope.userProfile.fullName + " is not availbale at the moment");
      return;
    } else {
      alert(
        "Booked " +
          $scope.userProfile.fullName +
          " successfully send " +
          $scope.userProfile.fullName +
          " a message bellow "
      );
      $http({
        method: "put",
        url: `/engineerworker/${$scope.worker_id}`,
        headers: { "Content-Type": "application/json; charset = utf-8" }
      }).then(function(response) {
        if (response.status == 200) {
          console.log("hi");
        } else {
          response.then(error => {
            console.log(error);
          });
        }
      });
      // const token = localStorage.getItem("token");
      // console.log(token);
      // $http({
      //   method: "post",
      //   url: `/engineerworker/${$scope.worker_id}`,
      //   headers: {
      //     "Content-Type": "application/json; charset = utf-8"
      //     // ,
      //     // "x-access-token": token
      //   }
      // }).then(function(response) {
      //   if (response.status == 201) {
      //     console.log("added");
      //   } else {
      //     console.log("err");
      //   }
      // });
      // let that = this;
      // const { match } = this.props;
      //console.log()
      // fetch(`/engineerworker/${match.params.id}`, {
      //   method: 'put'
      // }).then(function(response) {
      //   if (response.status == 200) {
      //     console.log('hi');
      //   } else {
      //     response.then((error) => {
      //       console.log(error);
      //     });
      //   }
      // });
      // const token = localStorage.getItem('token');
      // console.log(token);
      // fetch(`/engineerworker/${match.params.id}`, {
      //   method: 'post',
      //   headers: { 'x-access-token': token }
      // }).then(function(response) {
      //   if (response.status == 201) {
      //     console.log('added');
      //   } else {
      //     console.log('err');
      //   }
      // });
    }
  };

  $scope.sendMessage = function() {
    var { number, msg } = $scope;
    var message = { number, msg };
    console.log(message);
    $http({
      method: "post",
      url: "/sentMessage",
      headers: {
        "Content-Type": "application/json; charset = utf-8"
      },
      data: JSON.stringify(message)
    }).then(function(response) {
      if (response.status == 201) {
        console.log("sended");
      } else {
        console.log("err");
      }
    });
  };
});
