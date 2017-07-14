import React, { Component } from 'react';
import './App.css';
import TrackedChanges from './TrackedChanges';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a className="brand-logo">Logo</a>          
          </div>
        </nav>

        <TrackedChanges />

        <footer className="page-footer">
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
