import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
//import axios from 'axios';

import Options from './dashboard/Options';
import Graph from './dashboard/Graph';
import('../styles/Dashboard.css');

class Dashboard extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div className="site">
				<div className="header valign-wrapper">
					<h3 className="logo">What Kind of Music Do You Like?</h3>
				</div>
				<div className="options">
					<Options />
				</div>
				<div className="graph-wrapper">
					<div className="graph">
						<h2>{this.props.auth.spotifyID}</h2>
						<h2>{this.props.auth.spotifyRefreshToken}</h2>
						<button onClick={this.props.fetchRefreshToken}>Test</button>
						<Graph />
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps, actions)(Dashboard);
