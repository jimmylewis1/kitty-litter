app=angular.module('kittyLitter');

app.service('mainService', function($http) {
  this.getData = function() {
    return $http({
      method: 'GET',
      url: ''
    })
  };
});