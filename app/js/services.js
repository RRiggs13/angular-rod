'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').factory('identity', function($window) {
    return function(username, password) {
        $window.alert("identity check: " + username + ", " + password);
  			return true;
    };
  });
