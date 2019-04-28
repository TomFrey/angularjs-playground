'use strict'

angular.module('chucknorris-app.home')

  .component('randomJoke', {
    controller: 'RandomJokeCtrl',
    templateUrl: 'home/randomJoke.html'
  })

  .controller('RandomJokeCtrl', function (APIService) {
    const $ctrl = this

    $ctrl.$onInit = function () {
      APIService.random().$promise.then(joke => {
        $ctrl.randomJoke = joke.value
      })
    }
  })