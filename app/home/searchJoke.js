'use strict'

angular.module('chucknorris-app.home')

    .component('searchJoke', { // in html search-joke
        controller: 'SearchJokeCtrl',
        templateUrl: 'home/searchJoke.html'
    })

    .controller('SearchJokeCtrl', function (APIService, $q) {
        const $ctrl = this;

        function searchJoke (searchTerm) {
            return APIService.search({query: searchTerm}).$promise
                .then(searchResult => {
                    $ctrl.jokes = searchResult.result
                        .map(x => x.value)   //holt aus dem Resultat nur value
                        .map(value => ({
                            value,
                            order: Math.random()
                        }))                 // [{value:"", order:"random"},{}]
                        .sort((a,b) => a.order - b.order)
                        .map(x => x.value)
                        .slice(0,5);      //zeigt nur die ersten fünf Resultate an

                })
                .catch((e) => {
                    $ctrl.joke = "Friendly fail";
                    console.error(e);
                });
        }

        $ctrl.$onInit = function () {
            //$ctrl.loadAsync(() => $q.when(searchJoke))
        }

        $ctrl.onSearchClicked = function(){
            const searchTerm = $ctrl.searchTerm;
            if (!searchTerm) {
                return;
            }
            searchJoke(searchTerm);
        }
    })