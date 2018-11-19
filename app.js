
var app = angular.module('got', ['ngRoute', 'ngCookies']);

/* Configuração das Rotas */
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "main.html"
        })
        .when("/houses", {
            templateUrl: "houses.html",
            controller: "ControllerHouses",
            controllerAs: "ctrl"
        })
        .when("/characters", {
            templateUrl: "characters.html",
            controller: "ControllerChars",
            controllerAs: "ctrl"
        })
        .when("/books", {
            templateUrl: "books.html",
            controller: "ControllerBooks",
            controllerAs: "ctrl"
        })
        .when("/favorites", {
            templateUrl: "favorites.html",
            controller: "ControllerFavorites",
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

    
/* Recupera um cookie (função retirada do w3schools) */
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


/* Controller Personagens */
app.controller('ControllerChars', ['$scope', 'InfoService', function ($scope, service) {
    var self = this;
    self.characters = []; // Personagens filtrados
    self.character = {}; // Personagem escolhido
    self.allCharacters = []; // Todos os personagens

    /* Família do personagem */
    self.father = {};
    self.mother = {};
    self.spouse = {};
    self.url;

    self.houses = [];
    self.books = [];


    /* Recupera todas os personagens, casase livros */
    var page = 1;
    while (page < 200) { 
        service.getMultiple('characters', page, function (answer) {
            if (answer !== null) {
                self.allCharacters = self.allCharacters.concat(answer);
                self.characters = self.allCharacters;
            }
        });
        page++;
    }

    
    /* Recupera todos os livros */
    page = 1;
    while (page < 2) {
        service.getMultiple('books', page, function (answer) {
            if (answer !== null) {
                self.books = self.books.concat(answer);
            }
        });
        page++;
    }


    /* Recupera todos os livros */
    page = 1;
    while (page < 200) {
        service.getMultiple('houses', page, function (answer) {
            if (answer !== null) {
                self.houses = self.houses.concat(answer);
            }
        });
        page++;
    }



    /* Adiciona estrela nos personagens favoritos */
    $(document).ready(function () {
        var characters = getCookie('characters');
        console.log('haha');
        if (characters != ''){
            var urls = JSON.parse(characters);
            for (let i=0; i<urls.length; i++){
                service.getSingle(urls[i], function (answer) {
                    if (document.getElementById(answer.url) != null) {
                        document.getElementById(answer.url).setAttribute('checked', '');
                    }
                });
            }
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
        
    /* Adiciona e deleta casas dos favoritos */
    self.cookie = function(url){
        var cookies = getCookie('characters');

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
        document.cookie= 'characters='+JSON.stringify(cookies);
        location.reload();
    }

}]);

/* Controller Livros */
app.controller('ControllerBooks', ['InfoService', function (service) {
    var self = this;
    self.books = []; // Todos os livros
    self.book = {}; // Livros selecionado

    /* Recupera todos os livros */
    page = 1;
    while (page < 2) {
        service.getMultiple('books', page, function (answer) {
            if (answer !== null) {
                self.books = self.books.concat(answer);
                service.books = self.books;
            }
        });
        page++;
    }

     /* Adiciona estrela em livros favoritos */
     $(document).ready(function () {
        var books = getCookie('books');
        if (books != ''){
            var urls = JSON.parse(books);
            for (let i=0; i<urls.length; i++){
                service.getSingle(urls[i], function (answer) {
                    if (document.getElementById(answer.url) != null) {
                        document.getElementById(answer.url).setAttribute('checked', '');
                    }
                });
            }
        }
    });

    /* Recupera um livro específico */
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

    /* Adiciona e deleta livros dos favoritos */
    self.cookie = function(url){
        var cookies = getCookie('books');
    
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
        document.cookie= 'books='+JSON.stringify(cookies);
        location.reload();
    }

}]);


/* Controller Casas */
app.controller('ControllerHouses', ['InfoService', function (service) {
    var self = this;
    self.houses = []; // Todas as casas
    self.house = {}; // Casa selecionada

    /* Lord atual e ramos mais jovens */
    self.currentLord = {};
    self.cadetBranches = [];


    /* Recupera todas as casas */
    page = 1;
    while (page < 200) {
        service.getMultiple('houses', page, function (answer) { 
            if (answer !== null) {
                self.houses = self.houses.concat(answer);
                service.houses = self.houses;
            }
        });
        page++;
    }

    /* Adiciona estrela em casas favoritas */
    $(document).ready(function () {
        var houses = getCookie('houses');
        if (houses != ''){
            var urls = JSON.parse(houses);
            for (let i=0; i<urls.length; i++){
                service.getSingle(urls[i], function (answer) {
                    if (document.getElementById(answer.url) != null) {
                        document.getElementById(answer.url).setAttribute('checked', '');
                    }
                });
            }
        }
    });


    /* Recupera uma casa específica */
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

    /* Adiciona e deleta casas dos favoritos */
    self.cookie = function(url){
        var cookies = getCookie('houses');
    
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
        document.cookie= 'houses='+JSON.stringify(cookies);
        location.reload();
    }
}]);


app.controller('ControllerFavorites', ['InfoService', function (service) {
    self = this;
    self.characters = [];
    self.houses = [];
    self.books = [];
    
    favoritos = getCookie('characters');
    if (favoritos != ''){
        var urls = JSON.parse(favoritos);
        for (let i=0; i<urls.length; i++){
            service.getSingle(urls[i], function (answer) {
                if (answer !== null) {
                    self.characters.push(answer);
                }
            });
        }
    }

    favoritos = getCookie('houses');
    if (favoritos != ''){
        var urls = JSON.parse(favoritos);
        for (let i=0; i<urls.length; i++){
            service.getSingle(urls[i], function (answer) {
                if (answer !== null) {
                    self.houses.push(answer);
                }
            });
        }
    }

    favoritos = getCookie('books');
    if (favoritos != ''){
        var urls = JSON.parse(favoritos);
        for (let i=0; i<urls.length; i++){
            service.getSingle(urls[i], function (answer) {
                if (answer !== null) {
                    self.books.push(answer);
                }
            });
        }
    }

    /* Adiciona estrela em casas favoritas */
    $(document).ready(function () {
        var houses = getCookie('characters');
        if (houses != ''){
            var urls = JSON.parse(houses);
            for (let i=0; i<urls.length; i++){
                service.getSingle(urls[i], function (answer) {
                    if (document.getElementById(answer.url) != null) {
                        document.getElementById(answer.url).setAttribute('checked', '');
                    }
                });
            }
        }
    });

    /* Adiciona estrela em casas favoritas */
    $(document).ready(function () {
        var houses = getCookie('houses');
        if (houses != ''){
            var urls = JSON.parse(houses);
            for (let i=0; i<urls.length; i++){
                service.getSingle(urls[i], function (answer) {
                    if (document.getElementById(answer.url) != null) {
                        document.getElementById(answer.url).setAttribute('checked', '');
                    }
                });
            }
        }
    });


    /* Adiciona estrela em casas favoritas */
    $(document).ready(function () {
        var houses = getCookie('books');
        if (houses != ''){
            var urls = JSON.parse(houses);
            for (let i=0; i<urls.length; i++){
                service.getSingle(urls[i], function (answer) {
                    if (document.getElementById(answer.url) != null) {
                        document.getElementById(answer.url).setAttribute('checked', '');
                    }
                });
            }
        }
    });


    self.cookie = function(url){
        var cookies = null;
        var tipo = '';
        if (url.includes('characters')){
            cookies = getCookie('characters');
            tipo = 'characters';
        }else if (url.includes('houses')){
            cookies = getCookie('houses');
            tipo = 'houses';
        }else if (url.includes('books')){
            cookies = getCookie('books');
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
}]);

/* Cookies em angular 
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