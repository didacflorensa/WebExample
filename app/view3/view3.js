'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope', function($scope) {

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

    $scope.barra1 = rand_array[0];
    $scope.barra2 = rand_array[1];
    $scope.barra3 = rand_array[2];
    $scope.barra4 = rand_array[3];
  };

  $scope.reset = function () {
      $scope.barra1 = "";
      $scope.barra2 = "";
      $scope.barra3 = "";
      $scope.barra4 = "";

      array = [];
      array = ["", "Didac", "Andreu", "Jaume", "Ivan", "Maria", "Julia", "Llorenç S.", "Llorenç C."];
  };

}]);