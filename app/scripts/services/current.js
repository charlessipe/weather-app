'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.current
 * @description
 * # current
 * Factory in the angularAppApp.
 */

angular.module('angularAppApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...

    //API key 8d34b5da21d8bfcce9e172bf4c8a8264

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/weather?id=:cityID&units=imperial&APPID=8d34b5da21d8bfcce9e172bf4c8a8264', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '4717560' // Paris, France ID
        },
        isArray:false
      }
    });
  });
