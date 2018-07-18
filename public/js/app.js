const app = angular.module('NotesApp', []);

app.controller('AppController', ['$http', function($http){
  const controller = this;

  this.createNote = function(){
    $http({
    method: 'POST',
    url: '/notes',
    data: {
      author: this.author,
      recipient: this.recipient,
      content: this.content,
      image: this.image
    }
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

this.delete = function(note){
  $http({
    method: 'DELETE',
    url: '/notes/' + note._id
  }).then(function(response){
    console.log(response)
    controller.showNotes()
  })
}

this.showNotes()
}])
