
var app = angular.module('news',[]);

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


app.controller('NewsController', ['NewsService', function(newsService){
  var self = this;
  self.news = [];
  self.principais = [];
  self.new = {};
 
  newsService.getNews(function(answer) {
    if (answer !== null) {
      self.news = answer;
      self.setPrincipais();
    }
  });

  this.getSingleNotice = function(id) {
    newsService.getNew(id, function(answer) {
      if (answer !== null) {                
        self.new=answer;
      }
    });
  }


  this.setPrincipais = function(){
      for(let i=0; i<self.news.length; i++){
        if (self.news[i].points >= 150){
          self.principais.push(self.news[i]);  
          console.log(self.principais);
        }
      }
  }

}]); 




