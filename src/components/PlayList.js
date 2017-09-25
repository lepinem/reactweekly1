// PlayList.js

import React, { Component } from 'react'
import PlayListItem from './PlayListItem'

// Your PlayList component should pass down the state in the form of props to your PlayListItem component which will render the actual play list entries. (Hint: PlayListItem should be imported in PlayList)



export default class PlayList extends Component {
  render() {
    return(
      <div className="songlist">
        <div className="list-style">
          <button type="button" className="btn btn-success">Update List</button>
        </div>
        <div className="card-deck">
          <div className="card">
            {this.props.playlist.map((songInfo) => {
              return (
                <PlayListItem
                  key={songInfo._id}
                  songInfo={songInfo}
                />
              )
            })}
          </div>
        </div>
      </div>
      )
    }
  }
