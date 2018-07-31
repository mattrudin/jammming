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
    this.removeTrack = this.addTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return //needs more code; Step 41
    }
  }

  removeTrack(track) {
   if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      this.setState({
        //needs more code; Step 49
      })
    } 
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: 'name'
    })
  }

  savePlaylist() {
    let trackURIs = []; //Step 63
  }

  search(searchTerm) {
    console.log(searchTerm);
  }

  render() {
    return (
      <div className="data-reactroot">
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} 
                           onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} 
                      playlistTracks={this.state.playlistTracks}
                      onRemove={this.onRemove} 
                      onNameChange={this.updatePlaylistName}
                      onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
