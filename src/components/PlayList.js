// PlayList.js

import React, { Component } from 'react'
import PlayListItem from './PlayListItem'

// Your PlayList component should pass down the state in the form of props to your PlayListItem component which will render the actual play list entries. (Hint: PlayListItem should be imported in PlayList)



export default class PlayList extends Component {
  render() {
    return(
      <div className="card-deck">
        {this.props.playlist.map((songInfo) => {
          return (
            <PlayListItem
              key={songInfo._id}
              songInfo={songInfo}
            />  
          )
        })}





      </div>




    )

  }
}
