'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('MyCtrl1', [function() {

	}])
	.controller('MyCtrl2', [function() {

	}])
	.controller('LoginCtrl', ['$scope', '$dialog',  function ($scope, $dialog) {

var t = '<div class="modal-header">'+
          '<h1>This is the title</h1>'+
          '</div>'+
          '<div class="modal-body">'+
          '<p>Enter a value to pass to <code>close</code> as the result: <input ng-model="result" /></p>'+
          '</div>'+
          '<div class="modal-footer">'+
          '<button ng-click="close(result)" class="btn btn-primary" >Close</button>'+
          '</div>';

	$scope.opts = {
		backdrop: true,
		keyboard: true,
		backdropClick: true,
		templateUrl: 'partials/login.html',
		// template: t,
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