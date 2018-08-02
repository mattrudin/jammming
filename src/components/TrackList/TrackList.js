import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component{
	render() {
		return(
			<div className="TrackList">
				{/*<Track />*/}
				{this.props.playlistTracks.map((track) => {
					return <Track key={track[0].id} 
								  onAdd={this.props.onAdd} 
								  onRemove={this.props.onRemove}
								  isRemoval={this.props.isRemoval} />
				})}
			</div>
		);
	}
}

export default TrackList;