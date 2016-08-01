'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.citysearch
 * @description
 * # citysearch
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=8d34b5da21d8bfcce9e172bf4c8a8264', {}, {
      find: {
        method: 'GET',
        params: {
          query: 'seattle'
        },
        isArray: false
      }
    });

  });
