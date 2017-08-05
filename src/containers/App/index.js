import React, { Component } from 'react';

import Routes from '../../Routes';
import Header from '../../components/Header';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;