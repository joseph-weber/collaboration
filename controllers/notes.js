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

notes.delete('/:id', (req, res)=>{
  Note.findByIdAndRemove(req.params.id, (err, deletedNote)=>{
    res.json(deletedNote)
  })
})


notes.put('/:id', (req, res)=>{
  Note.findByIdAndUpdate(req.params.id, req.body, {return: true}, (err, updatedNote)=>{
    res.json(updatedNote)
  })

})

module.exports = notes;
