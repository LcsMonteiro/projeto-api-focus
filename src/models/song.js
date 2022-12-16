const mongoose = require("mongoose")

const songSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  songName: {
    type: String,
    required: true
  },
  artistName: {
    type: String,
    required: true
  },
  albumName: {
    type: String,
    required: true
  },
  songUrl: {
    type: String,
    required: true
  },
  playNumber: {
    type: Number,
    required: true
  },
  songDuration: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("song", songSchema)
