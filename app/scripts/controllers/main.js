'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */

angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope, citysearch, $localStorage) {

    $scope.storage = $localStorage;

    $scope.citiesFound = citysearch.find();

    console.log($scope.citiesFound);

    $scope.findCities = function(){
      $scope.citiesFound = citysearch.find({
        query: $scope.location
      });
      $scope.searchQuery = $scope.location;
    };

    //$scope.current = current.query();

    //console.log($scope.current);

    /*$scope.currentWeather = current.query({
      cityID: 1234567
    });

    $scope.citiesFound = citysearch.find({
      query: $scope.searchText
    });*/

    //$scope.yelp = yelp.query();

    /*$scope.places = places.query();

    console.log($scope.places);

    $scope.refreshCurrent = function(){
        $scope.current = current.query({
            location: $scope.location
        });
    */
  });

    /*
    // Request API access: http://www.yelp.com/developers/getting_started/api_access
    var Yelp = require('yelp');

    var yelp = new Yelp({
      consumer_key: 'wfmrdaQihSpXxYS1YTwG1A',
      consumer_secret: '4pZdOhA4K1uyko7VhFHtly_N47k',
      token: 'G68wajA06Nij1dlq1coGDigKrc0TuK2M',
      token_secret: 'QtfGTrldDslaqGVZszWVxrQ-e1o',
    });

    // See http://www.yelp.com/developers/documentation/v2/search_api
    yelp.search({ term: 'food', location: 'Montreal' })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.error(err);
    });
    */
