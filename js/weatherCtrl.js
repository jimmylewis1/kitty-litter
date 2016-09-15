var app = angular.module('kittyLitter');

app.controller('weatherCtrl', function($scope) {
  $scope.getWeather = function($http) {
    return $http({
      method: 'GET',
      url: 'api.openweathermap.org/data/2.5/weather?q=' + weather-input
    });
  }
});