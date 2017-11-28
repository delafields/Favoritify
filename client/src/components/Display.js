import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, artistThunk, trackThunk } from '../actions';
import { graph_colors, graph_fills, cloud_colors } from '../utils/color_util';

import MyAppBar from './dashboard/MyAppBar';
import MyTabs from './dashboard/MyTabs';
import TabContent from './dashboard/TabContent';
import MyLoader from './dashboard/MyLoader';

import SwipeableViews from 'react-swipeable-views';

class Display extends Component {
	state = { slideIndex: 0 };

	componentDidMount() {
		this.props.fetchUser();
		this.props.artistThunk();
		this.props.trackThunk();
	}

	handleChange = value => {
		this.setState({
			slideIndex: value
		});
	};

	render() {
		let { tracksFetched, tracksFetching } = this.props.tracks;
		let { artistsFetched, artistsFetching } = this.props.artists;
		let {
			shortTermArtists,
			shortTermGenres,
			shortTermExtraGenres,
			medTermArtists,
			medTermGenres,
			medTermExtraGenres,
			longTermArtists,
			longTermGenres,
			longTermExtraGenres
		} = this.props.artists.artistData;
		let {
			shortTermTracks,
			medTermTracks,
			longTermTracks
		} = this.props.tracks.trackData;

		let Content;
		if (
			tracksFetching &&
			!tracksFetched &&
			artistsFetching &&
			!artistsFetched
		) {
			Content = <MyLoader />;
		} else {
			Content = (
				<div>
					<SwipeableViews
						index={this.state.slideIndex}
						onChangeIndex={this.handleChange}
					>
						<TabContent
							artistImages={shortTermArtists}
							graphData={shortTermGenres}
							extraGenres={shortTermExtraGenres}
							cloudColors={cloud_colors.short}
							trackImages={shortTermTracks}
							graphColor={graph_colors.short}
							graphFill={graph_fills.short}
						/>
						<TabContent
							artistImages={medTermArtists}
							graphData={medTermGenres}
							extraGenres={medTermExtraGenres}
							cloudColors={cloud_colors.med}
							trackImages={medTermTracks}
							graphColor={graph_colors.med}
							graphFill={graph_fills.med}
						/>
						<TabContent
							artistImages={longTermArtists}
							graphData={longTermGenres}
							extraGenres={longTermExtraGenres}
							cloudColors={cloud_colors.long}
							trackImages={longTermTracks}
							graphColor={graph_colors.long}
							graphFill={graph_fills.long}
						/>
					</SwipeableViews>
				</div>
			);
		}

		return (
			<div>
				<MyAppBar iconElementLeft={<h4>{this.props.auth.spotifyID} </h4>} />
				<MyTabs onChange={this.handleChange} value={this.state.slideIndex} />
				{Content}
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchUser: () => dispatch(fetchUser()),
		trackThunk: () => dispatch(trackThunk()),
		artistThunk: () => dispatch(artistThunk())
	};
}

function mapStateToProps({ auth, artists, tracks }) {
	return { auth, artists, tracks };
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);
