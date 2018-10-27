import React, { Component } from 'react';
import Routes from './Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
        <FooterPage />
      </div>
    );
  }
}
export default App;
