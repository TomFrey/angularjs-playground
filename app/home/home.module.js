angular.module('chucknorris-app.home', [
  'ngRoute',
  'chucknorris-app.shared'
])
.config(function ($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html'
  })
})
