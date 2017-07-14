import React, { Component } from 'react';
import './App.css';
import TrackedChanges from './TrackedChanges';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper">
            <a className="brand-logo">Logo</a>          
          </div>
        </nav>
        <div className="App-main">
          <TrackedChanges />        
        </div>
        <footer className="page-footer" style={{flex: "1 0 auto"}}>
          <div className="footer-copyright">
            <div className="container">
              © 2017 Copyright Text
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
