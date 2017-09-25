//services.js
//
import axios from 'axios'

export function getAllSongs(){
  return axios.get('https://tiny-tiny.herokuapp.com/collections/playlisting')
}

export function addSong(songData) {
  return axios.post('https://tiny-tiny.herokuapp.com/collections/playlisting', {
    songData: {
      userName: songData.userName,
      songArtist: songData.songArtist,
      songTitle: songData.songTitle,
      songNotes: songData.songNotes
    }
  })
}
