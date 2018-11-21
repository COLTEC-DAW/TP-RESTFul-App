
var app = angular.module('news', ['ngRoute']);

app.config(function($routeProvider) {
  
  $routeProvider.when("/", 
    {
      templateUrl: "noticias.html",
      controller: "NewsController",
      controllerAs: "newsCtrl"
    }
  )
  .when("/noticia/:id", 
    {
      templateUrl: "noticiaSingle.html",
      controller: "NewsController",
      controllerAs: "newsCtrl"
    }
  )
  .otherwise(
    {
      redirectTo: "/"    
    }
  );
});

app.factory('NewsService', function($http){
  
  var newsService = {};
  
  newsService.getNews = function(callback) {
    $http.get('https://api.hnpwa.com/v0/news/1.json').then(function(response) {
      var answer = response.data;
      callback(answer);
    },
    function(response) {
      var answer = null;
      callback(answer);
    });
  };
  
  newsService.getNew = function(id, callback) {
    $http.get('https://api.hnpwa.com/v0/item/' + id + '.json').then(function(response) {
      var answer = response.data;
      callback(answer);
    },
    function(response) {
      var answer = null;
      callback(answer);
    });
  };
  
  return newsService;
});


app.controller('NewsController', ['NewsService', '$location', function(newsService, $location){
  var self = this;
  self.news = [];
  self.new = {};
 
  newsService.getNews(function(answer) {
    if (answer !== null) {
      self.news = answer;
    }
  });

  this.getDetalhes = function(id) {
    newsService.getNew(id, function(answer) {
      if (answer !== null) {
        self.new = answer;
      }
    });
    $location.path("noticia/"+id);
  }

  
}]); 




