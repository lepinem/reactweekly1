import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
// import NavBar from './NavBar'
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

  _addSong = (songData) => {
    addSong(songData).then((response) => {
      let playlist = this.state.playlist
      playlist.push(response.data)
      this.setState({ playlist: playlist })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="comps">
          <PlayListForm
            addNewSong={this._addSong}
          />
          {/* <PlayList
            playlist={this.state.playlist}
          /> */}
        </div>
      </div>
    )
  }
}

export default App;
