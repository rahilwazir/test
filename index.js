(function(ng) {
  'use strict';
  
  var app = ng.module('motatami', ['papi']);
  
  app.controller('motatamiCTRL', ['$scope', function($scope) {
    $scope.data = [1, 2, 3, 4];
  }]);
  
})(angular);
