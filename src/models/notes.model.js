const { Schema, model } = require('mongoose')

const noteSchema = new Schema({
  title: { type: String , required: true },
  desc: { type: String, required: true },
  status: { type: Boolean, default: true}
})

module.exports = model('notes', noteSchema)