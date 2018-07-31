import React from 'react';
import './Track.css';

class Track extends React.Component{
	constructor(props) {
		super(props);
		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
	}

	renderAction(isRemoval) {
		isRemoval ? '-' : '+';
	}

	addTrack() {
		//Step 45
	}

	removeTrack() {
		//Step 53
	}

	render() {
		return(
			<div className="Track">
				<div className="Track-information">
					<h3>{this.props.tracks.name}</h3>
					<p>{this.props.tracks.artist} | {this.props.tracks.album}</p>
				</div>
				<a className="Track-action" 
				   onClick={this.addTrack}>+</a>
			</div>
		);
	}
}

export default Track;