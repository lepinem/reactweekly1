//services.js
//
import axios from 'axios'

export function getAllSongs(){
  return axios.get('https://tiny-tiny.herokuapp.com/collections/playlisting')
}

export function addSong(songInfo) {
  return axios.post('https://tiny-tiny.herokuapp.com/collections/playlisting', {
    songInfo: {
      userName: songInfo.userName,
      songArtist: songInfo.songArtist,
      songTitle: songInfo.songTitle,
      songNotes: songInfo.songNotes
    }
  })
}
