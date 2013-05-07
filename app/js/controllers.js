'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('MyCtrl1', [function() {

	}])
	.controller('Questionaire', ['$scope', '$rootScope', function($scope, $rootScope) {

		$scope.labelClick = function(){
debugger;
			alert('username: ' + $scope.auth);
		};
	}])
	.controller('RootCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
debugger;
		$scope.auth = 'Fred';
	}])
	.controller('LoginCtrl', ['$scope', '$dialog', '$rootScope',  function ($scope, $dialog, $rootScope) {

		$scope.opts = {
			backdrop: true,
			keyboard: true,
			backdropClick: true,
			backdropFade: true,
			dialogFade: true,
			templateUrl: 'partials/login.html',
			controller: 'LoginController'
		};

		$scope.doLogin = function(){
			var d = $dialog.dialog($scope.opts);
			d.open().then(function(result){
				if(result)
				{
					$rootScope.auth = result;
					alert('dialog closed with result: ' + result);
				}
			});
		};
	}]);

// the dialog is injected in the specified controller
function LoginController($scope, $rootScope, dialog){
	$scope.close = function(result){
		dialog.close(result);
	};

}