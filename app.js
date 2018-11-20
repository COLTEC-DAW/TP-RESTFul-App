
var app = angular.module('times', []);



app.factory('TimesService', function($http){
  
  var timesService = {};
  
  timesService.getTimes = function(callback) {
    $http.get('https://api.cartolafc.globo.com/times?q=%5Bnome').then(function(response) {
      var answer = response.data;
      callback(answer);
    },
    function(response) {
      var answer = null;
      callback(answer);
    });
  };
  
  // timesService.getTime = function(timeName, callback) {
  //   $http.get('https://api.cartolafc.globo.com/times?q=' + timeName).then(function(response) {
  //     var answer = response.data;
  //     callback(answer);
  //   },
  //   function(response) {
  //     var answer = null;
  //     callback(answer);
  //   });
  // };
  
  return timesService;
});


app.controller('TimesController', ['TimesService', function(timesService){
  var self = this;
  self.times = [];
  self.time = {};
 
  timesService.getTimes(function(answer) {
    if (answer !== null) {
      self.times = answer;
    }
  });
  
  // this.getDetalhes = function(timeName) {
  //   timesService.getTime(timeName, function(answer) {
  //     if (answer !== null) {
  //       self.time = answer;
  //     }
  //   }); 
  // }

}]); 
