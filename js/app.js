var app = angular.module('kittyLitter', ['ngMaterial', 'ngMessages', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
    .otherwise('/');

  $stateProvider
    .state('home', {
      url: '/home',
      controller: 'mainCtrl'
    })
    .state('weather', {
      url: '/weather',
      templateUrl: 'partials/weather.html',
      controller: 'weatherCtrl'
    });
});

