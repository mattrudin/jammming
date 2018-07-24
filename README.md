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
* Results.js
* NewPlaylist.js
* Spotify.js

```
* How will the application handle state?
```

```
* What methods does the application need?
```
* SearchBar.js
  * .handleSearch
* Results
  * .populateList
* NewPlaylist.js
  * .addSong
  * .removeSong
  * .changeTitle
  * .savePlaylist
* Spotify.js
  * .login

```
* How does the application hook up to the Spotify API?
```

```
* How does the application save a playlist to a user's profile?
```


## 3. ToDo
* ~~fix CSS code in app.css (alignment of components)~~
* ~~add fonts~~
* ~~fix favicon.ico~~


## 4. Lessons learned