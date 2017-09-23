const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
  userName: { type: String },
  songArtist: { type: String },
  songTitle: { type: String },
  songNotes: { type: String}
})

const SongCard = mongoose.model('SongCard', songSchema)

module.exports = SongCard
