import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArtistData } from '../../actions';

import Graph from './Graph';

class ArtistsTab extends Component {
	componentDidMount() {
		this.props.fetchArtistData();
	}

	render() {
		return (
			<div>
				<h2>{this.props.auth.spotifyID}</h2>
				<button onClick={this.props.fetchRefreshToken}>RFT</button>
				<button onClick={this.props.fetchTrackData}>fetch track data</button>
				<button onClick={console.log(this.props.data)}>SHORT DATA</button>
				<Graph />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.data,
		auth: state.auth
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			fetchArtistData
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsTab);
