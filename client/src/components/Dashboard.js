import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import axios from 'axios';

class Dashboard extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<h1>I am dashboart</h1>
				<h2>{this.props.auth.spotifyID}</h2>
				<h2>{this.props.auth.spotifyRefreshToken}</h2>
				<a href="/api/logout">logout</a>
				<button>Click me for ya top shit</button>
				<a href="/api/refresh_token">Test</a>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps, actions)(Dashboard);
