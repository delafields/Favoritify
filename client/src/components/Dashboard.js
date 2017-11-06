import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import axios from 'axios';

class Dashboard extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		console.log(this.props);

		console.log(
			axios
				.get('https://api.spotify.com/v1/me/top/artists?limit=50', {
					headers: {
						Authorization: `Bearer ${this.props.auth.spotifyAccessToken}`
					}
				})
				.then(res => console.log(res.data))
		);

		return (
			<div>
				<h1>I am dashboart</h1>
				<h2>{this.props.auth.spotifyID}</h2>
				<h2>{this.props.auth.spotifyRefreshToken}</h2>
				<button>Click me for ya top shit</button>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps, actions)(Dashboard);
