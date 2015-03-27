'use strict';
angular.module('AuthApp').factory('AuthFactory', ['$http', '$window', 'ServerUrl', function($http, $window, ServerUrl){
  var login = function(credentials){
    return $http.post(ServerUrl + '/login', credentials).success(function(response){
      _storeSession(response);
    });
  };

  var _storeSession = function(data){
    $window.localStorage.setItem('ga-user', JSON.stringify(data));
    $http.defaults.headers.common.Authorization = 'Token token=' + data.token;
  };

  var logout = function(){
    return $http.get(ServerUrl + '/logout').success(function(response){
      $window.localStorage.removeItem('ga-user');
    });
  };

  var isAuthenticated = function(){
    var data = JSON.parse($window.localStorage.getItem('ga-user'));
    if(data) {return !!data.token;}
    return false;
  };

  var clearStorage = function(){

  };

  return {
    login: login,
    logout: logout,
    isAuthenticated: isAuthenticated,
    clearStorage: clearStorage
  };
}]);
