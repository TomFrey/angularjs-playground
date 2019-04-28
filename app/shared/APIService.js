angular.module('chucknorris-app.shared')

  .service('APIService', function ($resource) {
    const BASE_URL = 'https://api.chucknorris.io/jokes'

    return $resource(BASE_URL, {},
      {
        random: {
          url: BASE_URL + '/random',
          method: 'GET'
        }
      })
  })