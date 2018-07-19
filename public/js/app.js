const app = angular.module('NotesApp', []);

app.controller('AppController', ['$http', function($http){
  const controller = this;
  this.modal = false;

  this.toggleModal = function(){
    this.modal = !this.modal
  }
  this.createUser = function(){
          $http({
              method:'POST',
              url:'/users',
              data: {
                  username:this.username,
                  password:this.password
              }
          }).then(function(response){
              console.log(response);
          })
      }
      this.logIn = function(){
          $http({
              method:'POST',
              url:'/sessions',
              data: {
                  username:this.username,
                  password:this.password
              }
          }).then(function(response){
              console.log(response);
          })
      }

  this.goApp = function(){
          $http({
              method:'GET',
              url:'/app'
          }).then(function(response){
              console.log(response);
              controller.loggedInUserName = response.data.username
          })
      }
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
    controller.showNotes()
  })
}


this.updateNote = function(note){
  $http({
    method: 'PUT',
    url: '/notes/' + note._id,
    data: {
        author: this.author,
        recipient: this.recipient,
        content: this.content,
        image: this.image
    }
  }).then(function(response){
    console.log(response)
    controller.showNotes()
    console.log('hi')
    controller.toggleModal()
    // console.log(response)
  })
}

this.chooseOneNote = function(note){
    this.note = note;
    console.log(this.note._id)
  }


this.showNotes()
}])
