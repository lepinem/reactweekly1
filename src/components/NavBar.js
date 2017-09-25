// NavBar.js

import React, { Component } from 'react'
import logo from '../logo.svg'


export default class NavBar extends Component {
  render() {
    return(
      <div className="container-fluid">
        <div className="NavBar">
          <nav className="navbar navbar-dark bg-primary">
            <div className="row align-items-center">
              <div className="col">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <div className="col text-lg-left">
                <h2>Play What?!?!</h2>
              </div>
            </div>
          </nav>
        </div>
      </div>

    )
  }

}
