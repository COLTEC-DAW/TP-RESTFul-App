var app = angular.module('myApp', []);

app.controller('GuardianController', ['GuardianService', function(guardianService) {

  var self = this;
  self.sections = [];
  self.noticias = [];
  self.noticia = {};
  self.APIurl = "https://content.guardianapis.com/";

  self.tratarResultado = function(answer) {
    noticiasJSON = answer.response.results;
    for(var k in noticiasJSON) {
      var noticia = {
        id: noticiasJSON[k].id,
        webPublicationDate: noticiasJSON[k].webPublicationDate,
        thumbnail: noticiasJSON[k].fields.thumbnail,
        trailText: noticiasJSON[k].fields.trailText,
        sectionId: noticiasJSON[k].sectionId,
        webURL: noticiasJSON[k].webUrl,
        webTitle: noticiasJSON[k].webTitle
      }
      self.noticias.push(noticia);
    }
  }

  self.selectNoticia = function(id) {
    for(var k in self.noticias) {
      if (self.noticias[k].id == id) {
        self.noticia = self.noticias[k];
      }
    }
  }
 
  guardianService.getNoticias(function(answer) {
    if(answer !== null) {
      self.tratarResultado(answer);
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

  self.getNoticiasSection = function(section) {
    guardianService.getNoticiasSection(section, function(answer) {
      self.resetNoticias();
      self.tratarResultado(answer);
    });
  }

  self.getNoticiasSearch = function(search) {
    guardianService.getNoticiasSearch(search, function(answer) {
      self.resetNoticias();
      self.tratarResultado(answer);
    });
  }
}]);

app.factory('GuardianService', function($http){

  var guardianService = {};
  var APIurl = "https://content.guardianapis.com/";
  var APIsearch = "search?api-key=2936efab-4bcf-4254-b273-1344474cc484&show-fields=all"

  guardianService.getNoticias = function(callback) {
    $http.get(APIurl + APIsearch).then(function(response) {
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
    $http.get(APIurl + APIsearch + '&section=' + section).then(function(response) {
      var answer = response.data;
      callback(answer);
    },
    function(response) {
      var answer = null;
      callback(answer);
    });
  };

  guardianService.getNoticiasSearch = function(search, callback) {
    $http.get(APIurl + APIsearch + '&q=' + search).then(function(response) {
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
