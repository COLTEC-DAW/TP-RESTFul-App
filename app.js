var app = angular.module('myApp', []);

app.controller('GuardianController', ['GuardianService', function(service) {

  this.searchFilter = "";

  this.ctk = function(celsius) {
    return service.;
  }
}]);

app.factory('GuardianService', function($http){

  var guardianService = {};

  guardianService.getNoticias = function(callback) {
    $http.get('https://content.guardianapis.com/search?api-key=2936efab-4bcf-4254-b273-1344474cc484').then(function(response) {
      var answer = response.data;
      callback(answer);
    },
    function(response) {
      var answer = null;
      callback(answer);
    });
  };

  pokedexService.getNoticia = function(, callback) {
    $http.get('http://pokeapi.co/' + pokemonResource).then(function(response) {
      var answer = response.data;
      callback(answer);
    },
    function(response) {
      var answer = null;
      callback(answer);
    });
  };

  return pokedexService;
});
