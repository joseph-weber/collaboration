const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session')

app.use(session({
  secret:'passmessage',
  resave: false,
  saveUninitialized: false
}));

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }))


app.get('/app', (req, res)=>{
  if(req.session.currentUser){
    res.json(req.session.currentUser)
} else {
  res.status(401).json({
    status:401,
    message:'not logged in'
    })
  }
})

// const userController = require('./controllers/users.js');
// app.use('/users', userController);

// const sessionsController = require('./controllers/sessions.js');
// app.use('/sessions', sessionsController);

const notesController = require('./controllers/notes.js');
app.use('/notes', notesController)


app.listen(3000, ()=>{
  console.log('Hello World');
})

mongoose.connect('mongodb://localhost:27017/auth',
{useNewUrlParser:true});
mongoose.connection.once('open', ()=>{
  console.log('connected to mongo');
})
