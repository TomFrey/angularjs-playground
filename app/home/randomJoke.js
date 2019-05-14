'use strict'

angular.module('chucknorris-app.home')

  .component('randomJoke', { // in html random-joke
    controller: 'RandomJokeCtrl',
    templateUrl: 'home/randomJoke.html'
  })

  .controller('RandomJokeCtrl', function (APIService, $q) {
    const $ctrl = this;

    function loadCategories() {
        return APIService.categories().$promise
            .then(categories => {
                $ctrl.categories = categories;
            })
    };

    function loadRandomJoke (category) {
        return APIService.random({category: category}).$promise
            .then(joke => {$ctrl.randomJoke = joke.value})
            .catch((e) => {
                $ctrl.randomJoke = "Friendly fail";
                console.error(e);
            });
    }


    $ctrl.loadAsync = function(load){
        $ctrl.loading = true;
        load().finally(() => $ctrl.loading = false)
    }


    $ctrl.$onInit = function () {
        $ctrl.selectedCategory = null;
        $ctrl.loadAsync(() => $q.all([loadCategories(), loadRandomJoke()]))
    }


    $ctrl.onNewOneClicked = function () {
        const category = $ctrl.selectedCategory;
        $ctrl.loadAsync(() => loadRandomJoke(category));
    };
  })