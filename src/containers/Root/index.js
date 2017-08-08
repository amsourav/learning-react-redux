import React, { Component } from 'react';

import Routes from '../../Routes';
import Header from '../../components/Header';

class Root extends Component {
  render() {
    return (
      <div className="Root container">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default Root;