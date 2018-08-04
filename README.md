# Jammming
CodeCademy Intensive Course

Tags: *Build Front-End Web Applications from Scratch*

## Index

[1. Features](#1-features/) 

[2. Requirements](#2-requirements/)

[3. ToDo](#3-todo/)

[4. Lessons learned](#4-lessons-learned)  


## 1. Features
```
Below is a list of the website's features:

* Spotify Login — the first time a user searches for a song, album, or artist, Spotify will ask them to log in or set up a new account. You will need to follow the steps in the Spotify Developer Guide --> https://developer.spotify.com/web-api/tutorial/ to register your application.
* Search by Song, Album, or Artist — a user can type the name of a song, artist, or album into the search bar and click the SEARCH button. The app will request song data about the user's input from the Spotify library (find Spotify endpoints here --> https://developer.spotify.com/web-api/endpoint-reference/ ).
* Populate Results List — Jammming displays the list of returned tracks from the user's query.
* Add Song to a Custom Playlist — users can add a track to their playlist by selecting a + sign on the right side of the track's display container.
* Remove Song from Custom Playlist — users can remove a track from their playlist by selecting a - sign on the right side of the track's display container.
* Change Playlist Title — users can change the title of their custom playlist.
* Save Playlist to Account — users can save their custom playlist by clicking a button called SAVE TO SPOTIFY.
```  


## 2. Requirements
```
* What components does the application need?
```
* App.js
  * SearchBar.js
  * SearchResults.js
    * TrackList.js
      * Track.js
  * Playlist.js
    * TrackList.js
      * Track.js
  * Spotify.js  

```
* How will the application handle state?
```
State will be handled by the App.js component.
State flow *SearchResults*:
1. The Spotify.js component will be envoked by App.js and the information will be *"state'd"* in the same
2. App.js *"props"* the information to SearchResults.js
3. SearchResults.js *"props"* the information to TrackList.js
4. TrackList.js *"props"* the information to Track.js  

State flow *Playlist*:
1. The Spotify.js component will be envoked by App.js and the information will be *"state'd"* in the same
2. App.js *"props"* the information to Playlist.js
3. Playlist.js *"props"* the information to TrackList.js
4. TrackList.js *"props"* the information to Track.js

The following link explains a lot in terms of the state of a component:
[How to handle state in React. The missing FAQ.](https://medium.com/react-ecosystem/how-to-handle-state-in-react-6f2d3cd73a0c)  
```
* What methods does the application need?
```
* App.js
  * .addTrack
  * .removeTrack
  * .updatePlaylistName
  * .savePlaylist
  * .search
* SearchBar.js
  * .search
  * .handleSearch
* SearchResults.js
* TrackList.js
* Track.js
  * .addTrack
  * .removeTrack
  * .renderAction
* Playlist.js
  * .handleNameChange
* Spotify.js
  * .getAccessToken
  * .search
  * .savePlaylist  

```
* How does the application hook up to the Spotify API?
```
[Spotify: Authorization Guide](https://developer.spotify.com/documentation/general/guides/authorization-guide/)  
[Spotify Endpoint: Search for an item](https://developer.spotify.com/documentation/web-api/reference/search/search/)  

Via implicit grant flow.

```
* How does the application save a playlist to a user's profile?
```
[Spotify: Working with Playlists](https://developer.spotify.com/documentation/general/guides/working-with-playlists/)  
[Spotify Endpoint: Create a Playlist](https://developer.spotify.com/documentation/web-api/reference/playlists/create-playlist/)  


## 3. ToDo
* Release for approval 


## 4. Lessons learned
* React children that will be used by two or more React parents (see Tracklist.js: it will be used by SearchResults.js and Playlist.js)
* State and props in React components
* Add and remove different things trough props/state
* Handle API requests (was a tough one...)