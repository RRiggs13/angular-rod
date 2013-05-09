'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('MyCtrl1', [function() {

	}])
	.controller('Questionaire', ['$scope', function($scope) {

		$scope.labelClick = function(){
			alert('username: ' + $scope.auth);
		};
	}])
	.controller('RootCtrl', ['$scope', function ($scope) {
		$scope.auth = '';
	}])
	.controller('LoginCtrl', ['$scope', '$dialog',  function ($scope, $dialog) {

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
			d.open().then(function(result) {
				$scope.auth = result ? result : '';
			});
		};

		$scope.doLogout = function(){
			$scope.auth = '';
		};
	}]);

// the dialog is injected in the specified controller
function LoginController($scope, dialog){
	$scope.close = function(ok){
		var result = '';
		if (ok &&
				($scope.username.toLowerCase().indexOf('f') !== -1) &&
				($scope.password.toLowerCase().indexOf('f') !== -1)) {
			result = $scope.username;
		}
		dialog.close(result);
	};

}
