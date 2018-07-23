import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Results from './components/Results/Results';
import NewPlaylist from './components/NewPlaylist/NewPlaylist';
import Spotify from './util/Spotify';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to jammming</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
