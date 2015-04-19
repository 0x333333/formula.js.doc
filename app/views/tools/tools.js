'use strict';

angular.module('formula.tools', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tools', {
    templateUrl: 'views/tools/tools.html',
    controller: 'ToolsCtrl'
  });
}])

.controller('ToolsCtrl', [function() {

}]);