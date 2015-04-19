'use strict';

// Declare app level module which depends on views, and components
angular.module('formula', [
  'ngRoute',
  'formula.home',
  'formula.tools'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
