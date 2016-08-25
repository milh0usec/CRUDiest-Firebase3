app.controller('HomeController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  console.log("Home controller.");

  var ref = firebase.database().ref(); // Create Firebase reference
  $scope.movies = $firebaseArray(ref); // download the data into a local array
  // putting a console.log here won't work because it's asynchronous

}]);
