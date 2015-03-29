'use strict';
angular.module('AuthApp').factory('PostsFactory', ['$http', '$window', 'ServerUrl', function($http, $window, ServerUrl){

  var posts = [];

  var getPosts = function(){
    var data = JSON.parse($window.localStorage.getItem('ga-user'));
    var config = {
      headers: {
        'AUTHORIZATION': 'Token token=' + data.token
      }
    };
    return $http.get(ServerUrl + '/posts', config).success(function(response){
      angular.copy(response, posts);
    }).error(function(data, status, headers, config){
      console.log('ERROR: ', data, status, headers, config);
    });
  };

  return {
    posts: posts,
    getPosts: getPosts
  };

}]);
