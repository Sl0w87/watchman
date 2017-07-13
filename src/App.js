import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrackedChanges from './TrackedChanges';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
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
