angular.module('chucknorris-app.shared')

  .service('APIService', function ($resource) {
    const BASE_URL = 'https://api.chucknorris.io/jokes'

    return $resource(BASE_URL, {},
      {
            random: {
                url: BASE_URL + '/random',
                method: 'GET',
            },
            categories: {
              url: BASE_URL + '/categories',
              isArray: true,
              method: 'GET'
            },
          search: {
              url: BASE_URL + '/search',
              method: 'GET'
          }
      })
  })