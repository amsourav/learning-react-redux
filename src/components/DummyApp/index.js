import React, { Component } from 'react';
import logo from './logo.svg';
import './DummyApp.less';

class App extends Component {
  render() {
    return (
      <div className="DummyApp">
        <div className="DummyApp-header">
          <img src={logo} className="DummyApp-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="DummyApp-intro">
          To get started, edit <code>src/DummyApp.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
