const app = angular.module('NotesApp', []);

app.controller('AppController', ['$http', function($http){
  const controller = this;
  this.createNote = function(){
    $http({
    method: 'POST',
    url: '/notes'
  }).then(function(response){
    console.log(response)
  }, function(error){
    console.log(error)
  })
}

this.showNotes = function(){
  $http({
  method: 'GET',
  url: '/notes'
}).then(function(response){
  controller.notes = response.data
})
}
}])
