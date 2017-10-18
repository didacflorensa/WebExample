'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {

  var array = ["Test", "Didac", "Andreu", "Jaume", "Ivan", "Maria", "Julia", "Llorenç S.", "Llorenç C."];
  var rand_array = [];
  var j = 7;

  $scope.add = function () {
    for (var i = 0; i<4; i++)
    {
        var rand = Math.floor((Math.random()*j)+1);
        rand_array[i] = array[rand];
        array.splice(rand, 1);
        j = j -1;
    }

    j = 7;

    $scope.resp1 = rand_array[0];
    $scope.resp2 = rand_array[1];
    $scope.resp3 = rand_array[2];
    $scope.resp4 = rand_array[3];
  };

  $scope.reset = function () {
      $scope.resp1 = "";
      $scope.resp2 = "";
      $scope.resp3 = "";
      $scope.resp4 = "";

      array = [];
      array = ["", "Didac", "Andreu", "Jaume", "Ivan", "Maria", "Julia", "Llorenç S.", "Llorenç C."];
  };

}]);