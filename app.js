
var app = angular.module('got', ['ngRoute']);

/* Configuração das Rotas */
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/houses", {
        templateUrl : "houses.html",
        controller: "Controller",
        controllerAs: "ctrl" 
    })
    .when("/characters", {
        templateUrl : "characters.html",
        controller: "Controller",
        controllerAs: "ctrl" 
    })
    .when("/books", {
        templateUrl : "books.html",
        controller: "Controller",
        controllerAs: "ctrl" 
    });
});


/* Service  que faz as requisições */
app.factory('InfoService', function($http){
    var service = {};   

    service.getMultiple = function(name, page, callback) {
        $http.get('https://anapioficeandfire.com/api/'+name+'?pageSize=200&page=' + page).then(
            function(response){callback(response.data);},
            function(response){callback(null);}
        )};
  
    service.getSingle = function(url, callback) {
        $http.get(url).then(
            function(response){callback(response.data);},
            function(response){callback(null);}
        )};
 
  return service;
});


/* Controller */
app.controller('Controller', ['InfoService', function(service){
  var self = this;
  self.characters = [];
  self.character = {};
    
  self.houses = [];
  self.house = {};

  /* Família do personagem */
  self.father = {};
  self.mother = {};
  self.spouse = {};

  var page = 1;
  while (page < 200){ // Recupera todas os personagens
    service.getMultiple('characters', page, function(answer) {
        if (answer !== null) {
            self.characters = self.characters.concat(answer);
        }
    });
    page++;

}

var page = 1;
while (page < 200){
  service.getMultiple('houses', page, function(answer) { // Recupera todos as casas
      if (answer !== null) {
          self.houses = self.houses.concat(answer);
      }
  });
  page++;
}


    // Recupera um personagem
  self.getCharacter = function(url) {
    service.getSingle(url, function(answer) {
      if (answer !== null) {
        self.character = answer;
        service.getSingle(self.character.spouse, function(answer) {
            if (answer !== null) {
              self.spouse = answer;
              }
          });
        
        service.getSingle(self.character.mother, function(answer) {
        if (answer !== null) {
            self.mother = answer;
            }
        });

        service.getSingle(self.character.father, function(answer) {
        if (answer !== null) {
            self.father = answer;
            }
        });
        
        /* Volta para o topo */
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
    });
  }


    // Recupera uma casa específica
    self.getHouse = function(url) {
        service.getSingle(url, function(answer) {
        if (answer !== null) {
            self.house = answer;
        }
        });
    }
}]);

