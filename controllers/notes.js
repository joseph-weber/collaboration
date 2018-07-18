const express = require('express')
const notes = express.Router()
const Note = require('../models/notes.js')

notes.get('/', (req, res)=>{
  Note.find({}, (err, foundNotes)=>{
    res.json(foundNotes)
  })
})

notes.post('/', (req, res)=>{
  Note.create(req.body, (err, createdNotes)=>{
    console.log(req.body)
    res.json(createdNotes)
    console.log(createdNotes)
  })
});

module.exports = notes;
