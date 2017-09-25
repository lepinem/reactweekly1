// App.js

import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './NavBar'
import PlayListForm from './PlayListForm';
import PlayList from './PlayList';
import { getAllSongs, addSong } from '../services'

class App extends Component {
  constructor() {
    super();
    this.state = {
      playlist: []
    }
  }

  componentDidMount(){
    getAllSongs()
    .then((response) => {
      this.setState({
        playlist: response.data
      })
    })
  }

  _addSong = (songInfo) => {
    addSong(songInfo).then((response) => {
      let playlist = this.state.playlist
      playlist.push(response.data)
      this.setState({ playlist: playlist })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="Nav">
          <NavBar />
        </div>
        <div className="comps">
          <div className="row">
            <div className="col">
              <div className="plForm">
                <PlayListForm
                addSong={this._addSong}
                />
              </div>
            </div>
            <div className="col">
              <div className="plist">
                <PlayList
                  playlist={this.state.playlist}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
