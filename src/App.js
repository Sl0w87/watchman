import React, { Component } from 'react';
import './App.css';
import TrackingContainer from './tracking/TrackingContainer';
import {Navbar, Footer} from 'react-materialize';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar brand="watchman" right>
          <div className="nav-wrapper">
            <a className="brand-logo">
              
            </a>
          </div>
        </Navbar>
        <div className="App-main">
          <TrackingContainer />        
        </div>
        <Footer copyrights="&copy; 2017 Lars Georgi">
        </Footer>
      </div>
    );
  }
}

export default App;
