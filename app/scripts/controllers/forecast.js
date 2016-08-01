'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.cityID = $routeParams.cityID;

    $scope.forecastData = forecast.query({
        cityID: $routeParams.cityID
    });

    console.log("Forecast data " + $scope.forecastData);

  });
