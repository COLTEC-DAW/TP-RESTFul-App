var app = angular.module('myApp', []);

app.controller('GuardianController', ['GuardianService', function(guardianService) {

  var self = this;
  self.sections = [];
  self.noticias = [];
  self.noticia = {};
  self.APIurl = "https://content.guardianapis.com/";

  guardianService.getNoticias(function(answer) {
    if(answer !== null) {
      noticiasJSON = answer.response.results;
      for(var k in noticiasJSON) {
        var noticia = {
          id: noticiasJSON[k].id,
          sectionId: noticiasJSON[k].sectionId,
          webURL: noticiasJSON[k].webUrl,
          webTitle: noticiasJSON[k].webTitle
        }
        self.noticias.push(noticia);
      }
    }
  });

  guardianService.getSections(function(answer) {
    if(answer !== null) {
      sectionsJSON = answer.response.results;
      for(var k in sectionsJSON) {
        self.sections.push(sectionsJSON[k].id);
      }
    }
  });

  self.resetNoticias = function() {
    self.noticias = [];
  }

  self.sectionPolitics

  self.getNoticiasSection = function(section) {
    guardianService.getNoticiasSection(section, function(answer) {
      self.resetNoticias();
      noticiasJSON = answer.response.results;
      for(var k in noticiasJSON) {
        var noticia = {
          id: noticiasJSON[k].id,
          sectionId: noticiasJSON[k].sectionId,
          webURL: noticiasJSON[k].webUrl,
          webTitle: noticiasJSON[k].webTitle
        }
        self.noticias.push(noticia);
      }
    });
  }

  self.getNoticiasSearch = function(search) {
    guardianService.getNoticiasSearch(search, function(answer) {
      self.resetNoticias();
      noticiasJSON = answer.response.results;
      for(var k in noticiasJSON) {
        var noticia = {
          id: noticiasJSON[k].id,
          sectionId: noticiasJSON[k].sectionId,
          webURL: noticiasJSON[k].webUrl,
          webTitle: noticiasJSON[k].webTitle
        }
        self.noticias.push(noticia);
      }
    });
  }
}]);

app.factory('GuardianService', function($http){

  var guardianService = {};
  var APIurl = "https://content.guardianapis.com/";

  guardianService.getNoticias = function(callback) {
    $http.get(APIurl + 'search?api-key=2936efab-4bcf-4254-b273-1344474cc484').then(function(response) {
      var answer = response.data;
      callback(answer);
    },
    function(response) {
      var answer = null;
      callback(answer);
    });
  };

  guardianService.getSections = function(callback) {
    $http.get(APIurl + 'sections?api-key=2936efab-4bcf-4254-b273-1344474cc484').then(function(response) {
      var answer = response.data;
      callback(answer);
    },
    function(response) {
      var answer = null;
      callback(answer);
    });
  };

  guardianService.getNoticiasSection = function(section, callback) {
    $http.get(APIurl + 'search?api-key=2936efab-4bcf-4254-b273-1344474cc484&section=' + section).then(function(response) {
      var answer = response.data;
      callback(answer);
    },
    function(response) {
      var answer = null;
      callback(answer);
    });
  };

  guardianService.getNoticiasSearch = function(search, callback) {
    $http.get(APIurl + 'search?api-key=2936efab-4bcf-4254-b273-1344474cc484&q=' + search).then(function(response) {
      var answer = response.data;
      callback(answer);
    },
    function(response) {
      var answer = null;
      callback(answer);
    });
  };

  return guardianService;
});
