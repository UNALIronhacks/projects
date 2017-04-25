'use strict';

/**
 * @ngdoc function
 * @name nyuHousingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nyuHousingApp
 */
angular.module('nyuHousingApp')
  .controller('MainCtrl', function ($scope) {
    this.apiKey = 'AIzaSyAksdyG8enYS0H3EOCe3i3NEbjW5mrR1rs'
    $scope.slider = {
      minValue: 3500,
      maxValue: 5000,
      options: {
        translate: function(value, sliderId, label) {
          switch (label) {
            case 'model':
              return '$' + value;
            case 'high':
              return '$' + value;
            default:
              return '$' + value
          }
        },
        floor: 0,
        ceil: 7000,
        step: 100,
        minRange: 100,
        showTicks: false
      }
    };
  });
