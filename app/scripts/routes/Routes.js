'use strict';
angular.module('AuthApp').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/login', {
      templateUrl: 'views/login.html'
    })
    .when('/posts', {
      templateUrl: 'views/posts.html',
      controller: 'PostsController',
      controllerAs: 'postsController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
