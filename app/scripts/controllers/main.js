'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */

angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope, current, yelp) {
    $scope.current = current.query();

    $scope.yelp = yelp.query();


    $scope.refreshCurrent = function(){
        $scope.current = current.query({
            location: $scope.location
        });
    };


  });