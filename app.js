
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
app.controller('Controller', ['$scope', 'InfoService', function($scope, service){
  var self = this;
  self.characters = [];
  self.character = {};
  self.allCharacters = [];
    
  /* Família do personagem */
  self.father = {};
  self.mother = {};
  self.spouse = {};


  self.houses = [];
  self.house = {};

  /* Lord atual e ramos mais jovens */ 
  self.currentLord = {};
  self.cadetBranches = [];


  self.books = [];
  self.book = {};



    var page = 1;
    while (page < 200){ // Recupera todas os personagens
        service.getMultiple('characters', page, function(answer) {
            if (answer !== null) {
                self.allCharacters = self.allCharacters.concat(answer);
                self.characters = self.allCharacters;
            }
        });
        page++;
    }


    page = 1;
    while (page < 200){
        service.getMultiple('houses', page, function(answer) { // Recupera todas as casas
            if (answer !== null) {
                self.houses = self.houses.concat(answer);
            }
        });
        page++;
    }
    
    page = 1;
    while (page < 200){
        service.getMultiple('books', page, function(answer) { // Recupera todos os livros
            if (answer !== null) {
                self.books = self.books.concat(answer);
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
            service.getSingle(self.house.currentLord, function(answer) {
                if (answer !== null) {
                  self.currentLord = answer;
                  }
              });
           
            for (let i=0; i<self.house.cadetBranches.length; i++){  
                service.getSingle(self.house.cadetBranches[i], function(answer) {
                    if (answer !== null) {
                        self.cadetBranches = self.cadetBranches.concat(answer);
                    }
                });
            }
        });

         /* Volta para o topo */
         document.body.scrollTop = 0; // For Safari
         document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    // Recupera um livro específico
    self.getBook = function(url) {
        service.getSingle(url, function(answer){
            if (answer !== null) {
                self.book = answer;
            }
        });

        /* Volta para o topo */
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    $scope.filterByHouse = function(house){
        self.characters = [];
        for (let i=0; i<house.swornMembers.length; i++){  
            service.getSingle(house.swornMembers[i], function(answer) {
                if (answer !== null) {
                    self.characters.push(answer);
                }
            });
        }
    }

    $scope.filterByBook = function(book){
        self.characters = [];
        for (let i=0; i<book.characters.length; i++){  
            service.getSingle(book.characters[i], function(answer) {
                if (answer !== null) {
                    self.characters.push(answer);
                }
            });
        }
    }

    $scope.backToAll = function(){
        self.characters = self.allCharacters;
    }
}]);


