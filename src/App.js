import React, { Component } from 'react';
import './App.css';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
//import Spotify from './util/Spotify';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: {
          name: 'Name',
          artist: 'Artist',
          album: 'Album',
          id: 'id'
        },
      playlistName: 'default',
      playlistTracks: [
        { name: 'name',
          artist: 'artist',
          album: 'album',
          id: 'id'}
        ]
    }
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return //needs more code; Step 41
    }
  }

  render() {
    return (
      <div className="data-reactroot">
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
