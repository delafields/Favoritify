import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArtistData } from '../../actions';

const styles = {
	headline: {
		fontSize: 24,
		paddingTop: 16,
		marginBottom: 12,
		fontWeight: 400
	}
};

class TracksTab extends Component {
	render() {
		return (
			<div>
				<h2 style={styles.headline}>Tab Two</h2>
				<p>This is another example tab.</p>
			</div>
		);
	}
}

export default TracksTab;
