//services.js

import axios from 'axios'

const api = "https://tiny-lasagna-server.herokuapp.com/collections/playlisting"

export function getAllSongs(){
  return axios.get('api')
}

export function addSong(song) {
  return axios.post('api', {
    song: {
      userName: song.userName,
      songArtist: song.songArtist,
      songTitle: song.songTitle,
      songNotes: song.songNotes
    }
  })
}
