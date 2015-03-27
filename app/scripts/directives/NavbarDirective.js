'use strict';
angular.module('MainDirective').directive('gaNavbar', [function(){
  return {
    restrict: 'E',
    templateUrl: 'views/navbar.html',
    controller: 'NavbarController',
    controllerAs: 'navbarController',
    bindToController: true,
    scope: {},
    link: function($scope, element, attrs){}
  };
}]);
