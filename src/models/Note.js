const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

module.exports = mongoose.model('note', NoteSchema)

///Role, company, name location ,company description
