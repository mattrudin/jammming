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
      <div className="App">
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <SearchBar />
        <Results />
        <Playlist />
      </div>
    );
  }
}

export default App;
