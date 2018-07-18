const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const noteSchema = mongoose.Schema({
  author: String,
  recipient: String,
  content: String,
  image: String
})

const Notes = mongoose.model('Note', noteSchema);
module.exports = Notes;
