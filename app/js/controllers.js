'use strict';

/* Controllers */
/* This creates the controllers as properties on the "myApp" object (namespace) ???
*/
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
	.controller('LoginCtrl', ['$scope', '$dialog', 'identity', function ($scope, $dialog, identity) {

		$scope.opts = {
			backdrop: true,
			keyboard: true,
			backdropClick: true,
			backdropFade: true,
			dialogFade: true,
			templateUrl: 'partials/login.html',
			controller: 'LoginDialogCtrl'
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
	}])
	.controller('LoginDialogCtrl', ['$scope', 'dialog',  'authenticate', function ($scope, dialog, auth) {
		// the dialog is injected in the specified controller (note using 'dialog' w/o '$'!!!)
			$scope.close = function(ok){
				var result = '';
				if (ok && auth.validate($scope.username, $scope.password)) {
					result = $scope.username;
				}
				dialog.close(result);
			};

		}]);
