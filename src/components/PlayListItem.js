// PlayListItem.js

import React, { Component } from 'react'


export default class PlayListItem extends Component {
  render(){
    const { songInfo } = this.props
    return (
      <div className="card text-white bg-dark mb-3">
        <div className='card-header'>User: {songInfo.userName}</div>
        <div className='card-body'>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Artist: {songInfo.songArtist}</li>
            <li className="list-group-item">Title: {songInfo.songTitle}</li>
            <li className="list-group-item">Notes: {songInfo.songNotes}</li>
          </ul>
        </div>
      </div>
    )
  }
}
