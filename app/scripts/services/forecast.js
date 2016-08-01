'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.forecast
 * @description
 * # forecast
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
  .factory('forecast', function ($resource) {
    // Service logic
    // ...

    

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=imperial&APPID=8d34b5da21d8bfcce9e172bf4c8a8264', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '4717560' // Paris, France ID
        },
        isArray:false
      }
    });

  });
