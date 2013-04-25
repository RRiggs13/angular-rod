'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('LoginCtrl', ['$scope', function ($scope) {
  	$scope.username = "fred";
  	$scope.password = "empty";
  }]);

