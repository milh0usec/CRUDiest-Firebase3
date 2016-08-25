app.controller('ShowController', ['$scope', '$firebaseObject', function($scope, $firebaseObject) {
  console.log("Show controller.");

  var ref = firebase.database().ref(); // Create Firebase reference
  $scope.movie = $firebaseObject(ref); // download the data into a local object
  // putting a console.log here won't work because it's asynchronous

}]);
