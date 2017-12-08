import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, artistThunk, trackThunk } from '../actions';
import { graph_colors, tab_color, cloud_colors } from '../utils/color_util';

import MyAppBar from './display/MyAppBar';
import MyTabs from './display/MyTabs';
import TabContent from './display/TabContent';
import RecordLoader from './display/RecordLoader';
import Footer from './display/Footer';

import SwipeableViews from 'react-swipeable-views';

class Display extends Component {
	state = {
		slideIndex: 0,
		shortDialogOpen: false,
		medDialogOpen: false,
		longDialogOpen: false,
		loading: true
	};

	componentDidMount() {
		this.props.fetchUser();
		this.props.artistThunk();
		this.props.trackThunk();
		/* Testing this to see if it solves the slow Sounds async */
		setTimeout(() => {
			this.setState({ loading: false });
		}, 7000);
	}

	handleTabChange = value => {
		this.setState({
			slideIndex: value
		});
	};

	/* For the extra genres button. Dumb hack. */
	handleShortDialogOpen = () => {
		this.setState({ shortDialogOpen: true });
	};

	handleShortDialogClose = () => {
		this.setState({ shortDialogOpen: false });
	};

	handleMedDialogOpen = () => {
		this.setState({ medDialogOpen: true });
	};

	handleMedDialogClose = () => {
		this.setState({ medDialogOpen: false });
	};

	handleLongDialogOpen = () => {
		this.setState({ longDialogOpen: true });
	};

	handleLongDialogClose = () => {
		this.setState({ longDialogOpen: false });
	};

	render() {
		/* Handles the loading status */
		let { tracksFetched, tracksFetching } = this.props.tracks;
		let { artistsFetched, artistsFetching } = this.props.artists;
		/* Props to be sent down */
		let {
			shortTermArtists,
			shortTermGenres,
			shortTermExtraGenres,
			shortTermArtistPopularity,
			medTermArtists,
			medTermGenres,
			medTermExtraGenres,
			medTermArtistPopularity,
			longTermArtists,
			longTermGenres,
			longTermExtraGenres,
			longTermArtistPopularity
		} = this.props.artists.artistData;
		let {
			shortTermTracks,
			shortTermAudioFeatures,
			shortTermTrackPopularity,
			medTermTracks,
			medTermAudioFeatures,
			medTermTrackPopularity,
			longTermTracks,
			longTermAudioFeatures,
			longTermTrackPopularity
		} = this.props.tracks.trackData;

		/* Show loader until data is fetched */
		let Content;
		if (
			/*
			tracksFetching &&
			!tracksFetched &&
			artistsFetching &&
			!artistsFetched &&
			*/
			this.state.loading === true
		) {
			Content = <RecordLoader />;
		} else {
			Content = (
				<div>
					<MyAppBar iconElementLeft={<h4>{this.props.auth.spotifyID} </h4>} />
					<MyTabs
						onChange={this.handleTabChange}
						value={this.state.slideIndex}
					/>
					<SwipeableViews
						index={this.state.slideIndex}
						onChangeIndex={this.handleTabChange}
					>
						<TabContent
							/* Passed to Genres */
							graphData={shortTermGenres}
							graphColor={graph_colors.short}
							extraGenres={shortTermExtraGenres}
							isDialogOpen={this.state.shortDialogOpen}
							handleDialogOpen={this.handleShortDialogOpen}
							handleDialogClose={this.handleShortDialogClose}
							cloudColors={cloud_colors.short}
							/* Passed to ArtistsNTracks */
							artistData={shortTermArtists}
							trackData={shortTermTracks}
							avgArtistPopularity={shortTermArtistPopularity}
							avgTrackPopularity={shortTermTrackPopularity}
							/* Passed to Sounds */
							audioFeatures={shortTermAudioFeatures}
							/* Passed to all */
							tabColor={tab_color.short}
						/>
						<TabContent
							graphData={medTermGenres}
							graphColor={graph_colors.med}
							extraGenres={medTermExtraGenres}
							isDialogOpen={this.state.medDialogOpen}
							handleDialogOpen={this.handleMedDialogOpen}
							handleDialogClose={this.handleMedDialogClose}
							cloudColors={cloud_colors.med}
							artistData={medTermArtists}
							trackData={medTermTracks}
							avgArtistPopularity={medTermArtistPopularity}
							avgTrackPopularity={medTermTrackPopularity}
							audioFeatures={medTermAudioFeatures}
							tabColor={tab_color.med}
						/>
						<TabContent
							graphData={longTermGenres}
							graphColor={graph_colors.long}
							extraGenres={longTermExtraGenres}
							isDialogOpen={this.state.longDialogOpen}
							handleDialogOpen={this.handleLongDialogOpen}
							handleDialogClose={this.handleLongDialogClose}
							cloudColors={cloud_colors.long}
							artistData={longTermArtists}
							trackData={longTermTracks}
							avgTrackPopularity={longTermTrackPopularity}
							avgArtistPopularity={longTermArtistPopularity}
							audioFeatures={longTermAudioFeatures}
							tabColor={tab_color.long}
						/>
					</SwipeableViews>
					<Footer />
				</div>
			);
		}

		return <div>{Content}</div>;
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
