import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component{
	render() {
		return(
			<div className="TrackList">
				<Track />
				{this.props.tracks.map((tracks) => {
					return <Track key={Track.id} />
				})}
			</div>
		);
	}
}

export default TrackList;