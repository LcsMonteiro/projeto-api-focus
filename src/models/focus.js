const mongoose = require("mongoose")

const focusSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  initialTime: {
    type: Date,
    required: true,
    default: new Date
  },
  finalTime: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  photoURL: {
    type: String,
    required: true
  },
  create: {
    type: Date,
    required: true,
    default: new Date
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user"
  },
})

module.exports = mongoose.model("focus", focusSchema)
