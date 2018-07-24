import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Results from './components/Results/Results';
import Playlist from './components/Playlist/Playlist';
//import Spotify from './util/Spotify';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="data-reactroot">
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <Results />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
