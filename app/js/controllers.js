'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('MyCtrl1', [function() {

	}])
	.controller('Questionaire', [function() {

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
		d.open().then(function(result){
			if(result)
			{
				alert('dialog closed with result: ' + result);
			}
		});
	};
}]);

// the dialog is injected in the specified controller
function LoginController($scope, dialog){
	$scope.close = function(result){
		dialog.close(result);
	};

}