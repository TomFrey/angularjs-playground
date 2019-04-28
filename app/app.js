'use strict';

angular.module('chucknorris-app', [
  'ngRoute',
  'chucknorris-app.home'
])
  .config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/home'});
});
