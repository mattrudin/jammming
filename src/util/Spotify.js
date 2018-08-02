const clientID = '9886d9f956354ae89e837076c4ed464f';
const redirectURI = 'http://localhost:3000/';
let userID = '';
let playlistID = '';
let accessToken = '';
let expiresIn = '';

const Spotify = {
	getAccessToken() {
		if (accessToken) {
			return accessToken;
		} else {
			accessToken = window.location.href.match(/access_token=([^&]*)/);
			expiresIn = window.location.href.match(/expires_in=([^&]*)/);
			window.setTimeout(() => accessToken = '', expiresIn * 1000);
			window.history.pushState('Access Token', null, '/');
			if (!accessToken) {
			window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
			}
		}
	},

	search(term) {
		return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
  			headers: {
  				Authorization: `Bearer ${accessToken}`
  			}
		}).then(response => {
			return response.json();
		}).then(jsonResponse => {
			if(jsonResponse.tracks) {
				return jsonResponse.tracks.map(track => {
					return {
						id: track.id,
				        name: track.name,
				        artist: track.artist[0].name,
				        album: track.album.name,
				        URI: track.uri
					}
				});
			} else {
				return [];
			}
		});
	},

	savePlaylist(playlistName, arrURI) {
		if(!playlistName && !arrURI) return;
		let token = this.getAccessToken();
		const headers = {
      		Authorization: `Bearer ${token}`
    	};
    	fetch('https://api.spotify.com/v1/me', {
    		headers: headers
    	}).then(response => {
			return response.json();
		}).then(jsonResponse => {
			userID = jsonResponse.id;
		});
		fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
                headers: headers,
                method: `POST`,
                body: JSON.stringify({name: playlistName})
        }).then(response => {
        	return response.json();
        }).then(jsonResponse => {
        	playlistID = jsonResponse.id; 
        })
        fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({uris: arrURI})
		});
	}
}

export default Spotify;