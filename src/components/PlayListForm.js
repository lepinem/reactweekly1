// PlayListForm.js

import React, { Component } from 'react'
import { getPlaylistSongs, addToList } from '../services'

// The state for your PlayListForm component should have userName, songArtist, songTitle, and songNotes in order to function properly with the fetch functions from the tinylasgna.js file that you will copy into the component. Follow the directions in that file.

export default class PlayListForm extends Component {
  constructor(){
    super();
    this.state = {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
    }
  }

  addSong = (e) => {
      e.preventDefault();
      this.setState({
        userName: e.target.value,
        songTitle: e.target.value,
        songArtist: e.target.value,
        songNotes: e.target.value
      });
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  _handleChange = (submit) => {
    let inputName = submit.target.name
    this.setState({
      [inputName] : submit.target.value
    })
  }

  _handleSubmit = (submit) => {
    submit.preventDefault();
    let songData = {
      userName: this.state.userName,
      songArtist: this.state.songArtist,
      songTitle: this.state.songTitle,
      songNotes: this.state.songNotes
    }
    this.props.addSong(this.state.songData)
  }



  render(){
    return (
    <div className="songForm">
      <div className="container w-50">
        <form onSubmit={this._handleSubmit}>
          <div className="form-group">
            <label className="form-control-label" htmlFor="formGroupExampleInput">User Name:</label>
            <input onChange={this._handleChange} value={this.state.userName} name="userName" type="text" className="form-control" id="formGroupExampleInput" placeholder="Name or User Name" />
          </div>
          <div className="form-group">
            <label className="form-control-label" htmlFor="formGroupExampleInput">Artist/Band:</label>
            <input onChange={this._handleChange} value={this.state.songArtist} name="songArtist" type="text" className="form-control" id="formGroupExampleInput2" placeholder="Artist or Band Name" />
          </div>
          <div className="form-group">
            <label className="form-control-label" htmlFor="formGroupExampleInput">Song Title:</label>
            <input onChange={this._handleChange} value={this.state.songTitle} name="songTitle" type="text" className="form-control" id="formGroupExampleInput2" placeholder="Song Title" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Notes About Song:</label>
            <textarea onChange={this._handleChange} value={this.state.songNotes} name="songNotes" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
    )
  }
}
