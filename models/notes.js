const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
  author: String,
  recipient: Array,
  content: String,
  image: String
})

module.exports = mongoose.model('Note', noteSchema)
