const express = require('express')
const notes = express.Router()

const Notes = require('../models/notes.js')

notes.get('/', (req, res)=>{
  Notes.find({}, (err, foundNotes)=>{
    res.json(foundNotes)
  })
})

notes.post('/', (req, res)=>{
  Notes.create(req.body, (err, createdNotes)=>{
    res.json(createdNotes)
  })
});

module.exports = notes;
