app=angular.module('kittyLitter');

app.controller('mainCtrl', function($scope, mainService) {
  $scope.test = "Hello";

  $scope.date = moment().format("dddd, MMMM Do YYYY");
  $scope.time = moment().format("h:mm:ss a");

  $scope.goGetIt = function() {
    mainService.getData().then(function (response) {
      $scope.data = response.data;
      // console.log('DATA', $scope.data);
    });
  }
  $scope.goGetIt();
});