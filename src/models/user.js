const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    songs: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "song"
      }
})

module.exports = mongoose.model("user", userSchema)
