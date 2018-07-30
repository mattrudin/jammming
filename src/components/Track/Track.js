import React from 'react';
import './Track.css';

class Track extends React.Component{
	constructor//Step 45 + 46

	renderAction(isRemoval) {
		isRemoval ? '-' : '+';
	}

	addTrack() {

	}

	render() {
		return(
			<div className="Track">
				<div className="Track-information">
					<h3>{this.props.tracks.name}</h3>
					<p>{this.props.tracks.artist} | {this.props.tracks.album}</p>
				</div>
				<a className="Track-action">+</a>
			</div>
		);
	}
}

export default Track;