
var app = angular.module('got', ['ngRoute', 'ngCookies']);

/* Configuração das Rotas */
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "main.html"
        })
        .when("/houses", {
            templateUrl: "houses.html",
            controller: "Controller",
            controllerAs: "ctrl"
        })
        .when("/characters", {
            templateUrl: "characters.html",
            controller: "Controller",
            controllerAs: "ctrl"
        })
        .when("/books", {
            templateUrl: "books.html",
            controller: "Controller",
            controllerAs: "ctrl"
        })
        .when("/favorites", {
            templateUrl: "favorites.html",
            controller: "Controller",
            controllerAs: "ctrl"
        });
});


/* Service  que faz as requisições */
app.factory('InfoService', function ($http) {
    var service = {};

    service.getMultiple = function (name, page, callback) {
        $http.get('https://anapioficeandfire.com/api/' + name + '?pageSize=200&page=' + page).then(
            function (response) { callback(response.data); },
            function (response) { callback(null); }
        )
    };

    service.getSingle = function (url, callback) {
        $http.get(url).then(
            function (response) { callback(response.data); },
            function (response) { callback(null); }
        )
    };

    return service;
});


/* Controller */
app.controller('Controller', ['$scope', 'InfoService', function ($scope, service) {
    var self = this;
    self.characters = [];
    self.character = {};
    self.allCharacters = [];

    /* Família do personagem */
    self.father = {};
    self.mother = {};
    self.spouse = {};
    self.url;


    self.houses = [];
    self.house = {};

    /* Lord atual e ramos mais jovens */
    self.currentLord = {};
    self.cadetBranches = [];


    self.books = [];
    self.book = {};


    var page = 1;
    while (page < 200) { // Recupera todas os personagens
        service.getMultiple('characters', page, function (answer) {
            if (answer !== null) {
                self.allCharacters = self.allCharacters.concat(answer);
                self.characters = self.allCharacters;
            }
        });
        page++;
    }


    page = 1;
    while (page < 200) {
        service.getMultiple('houses', page, function (answer) { // Recupera todas as casas
            if (answer !== null) {
                self.houses = self.houses.concat(answer);
            }
        });
        page++;
    }

    page = 1;
    while (page < 200) {
        service.getMultiple('books', page, function (answer) { // Recupera todos os livros
            if (answer !== null) {
                self.books = self.books.concat(answer);
            }
        });
        page++;
    }


    $(document).ready(function () {
        /* Adiciona checked em favoritos */
        var urls = JSON.parse(getCookie('characters'));
        for (let i=0; i<urls.length; i++){
            service.getSingle(urls[i], function (answer) {
                if (document.getElementById(answer.url) != null) {
                    document.getElementById(answer.url).setAttribute('checked', '');
                }
            });
        }
        var urls = JSON.parse(getCookie('houses'));
        for (let i=0; i<urls.length; i++){
            service.getSingle(urls[i], function (answer) {
                if (document.getElementById(answer.url) != null) {
                    document.getElementById(answer.url).setAttribute('checked', '');
                }
            });
        }
        var urls = JSON.parse(getCookie('books'));
        for (let i=0; i<urls.length; i++){
            service.getSingle(urls[i], function (answer) {
                if (document.getElementById(answer.url) != null) {
                    document.getElementById(answer.url).setAttribute('checked', '');
                }
            });
        }
    });

    // Recupera um personagem
    self.getCharacter = function (url) {
        service.getSingle(url, function (answer) {
            if (answer !== null) {
                self.character = answer;
                service.getSingle(self.character.spouse, function (answer) {
                    if (answer !== null) {
                        self.spouse = answer;
                    }
                });

                service.getSingle(self.character.mother, function (answer) {
                    if (answer !== null) {
                        self.mother = answer;
                    }
                });

                service.getSingle(self.character.father, function (answer) {
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
    self.getHouse = function (url) {
        service.getSingle(url, function (answer) {
            if (answer !== null) {
                self.house = answer;
            }
            service.getSingle(self.house.currentLord, function (answer) {
                if (answer !== null) {
                    self.currentLord = answer;
                }
            });

            for (let i = 0; i < self.house.cadetBranches.length; i++) {
                service.getSingle(self.house.cadetBranches[i], function (answer) {
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
    self.getBook = function (url) {
        service.getSingle(url, function (answer) {
            if (answer !== null) {
                self.book = answer;
            }
        });

        /* Volta para o topo */
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    // Filtra personagens pela casa
    $scope.filterByHouse = function (house) {
        self.characters = [];
        for (let i = 0; i < house.swornMembers.length; i++) {
            service.getSingle(house.swornMembers[i], function (answer) {
                if (answer !== null) {
                    self.characters.push(answer);
                }
            });
        }
    }

    // Filtra personagens pelo livro
    $scope.filterByBook = function (book) {
        self.characters = [];
        for (let i = 0; i < book.characters.length; i++) {
            service.getSingle(book.characters[i], function (answer) {
                if (answer !== null) {
                    self.characters.push(answer);
                }
            });
        }
    }

    // Retorna com todos os personagens
    $scope.backToAll = function () {
        self.characters = self.allCharacters;
    }

    
    // Retorna os favoritos
    this.getFavorites = function(tipo){
        var itens = [];
        var urls = JSON.parse(getCookie(tipo));
        for (let i=0; i<urls.length; i++){
            service.getSingle(urls[i], function (answer) {
                if (answer !== null) {
                    itens.push(answer);
                }
            });
        }
        return itens;
    }

    // Cria e deleta cookies //
    this.cookie = function(url){
        var cookies = null;
        var tipo = '';
        if (url.includes('characters')){
            cookies = getCookie('characters');
            tipo = 'characters';
        }else if (url.includes('houses')){
            cookies = getCookie('houses');
            tipo = 'houses';
        }else if (url.includes('books')){
            cookies = getCookie('houses');
            tipo = 'books';
        }      

        if (cookies.includes(url)){
            cookies = JSON.parse(cookies);
            cookies.splice(cookies.indexOf(url), 1);
            
        }else{
            if (cookies == ''){
                cookies = '[]';
            }
            cookies = JSON.parse(cookies);
            cookies.push(url);
        }
        document.cookie= tipo+'='+JSON.stringify(cookies);
        location.reload();
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
}]);

/*
app.controller('CookiesController', ['$scope', '$cookies', function ($scope, $cookies) {
    $scope.SetCookies = function (att) {
        var arrayChar = [];

        if ($cookies.get('urlChar') !== 'undefined') {
            arrayChar.push($cookies.get('urlChar'));
        }
        arrayChar.push(att);

        console.log(arrayChar);
        $cookies.put("urlChar", arrayChar);
    };
    $scope.GetCookies = function () {
        return $cookies.get('urlChar');
    };
    $scope.ClearCookies = function () {
        $cookies.remove('urlChar');
    };


    
}]); */