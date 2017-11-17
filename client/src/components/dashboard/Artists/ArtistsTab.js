import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import request from 'request';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import {
	formatArtistResponse,
	formatTrackResponse
} from '../../../utils/format_response';

import CircularProgress from 'material-ui/CircularProgress';
import { blueGrey900, indigoA700, purpleA400 } from 'material-ui/styles/colors';

import MyStepper from '../shared/Stepper';
import StepContent from '../shared/StepContent';

class ArtistsTab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shortTermArtists: '',
			shortTermTracks: '',
			shortTermGenres: [],
			shortTermExtraGenres: [],
			medTermArtists: '',
			medTermTracks: '',
			medTermGenres: [],
			medTermExtraGenres: [],
			longTermArtists: '',
			longTermTracks: '',
			longTermGenres: [],
			longTermExtraGenres: [],
			loading: true,
			stepIndex: 0
		};
		this.fetchArtists = this.fetchArtists.bind(this);
	}

	componentDidMount() {
		this.fetchArtists();
	}

	fetchArtists() {
		axios.get('/api/refresh_token').then(response => {
			let { access_token } = response.data;

			const shortTermArtistsOptions = {
				url: `https://api.spotify.com/v1/me/top/artists?limit=20&time_range=short_term`,
				headers: { Authorization: `Bearer ${access_token}` },
				json: true
			};

			const shortTermTracksOptions = {
				url: `https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=short_term`,
				headers: { Authorization: `Bearer ${access_token}` },
				json: true
			};

			const medTermArtistsOptions = {
				url: `https://api.spotify.com/v1/me/top/artists?limit=20&time_range=medium_term`,
				headers: { Authorization: `Bearer ${access_token}` },
				json: true
			};

			const medTermTracksOptions = {
				url: `https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=medium_term`,
				headers: { Authorization: `Bearer ${access_token}` },
				json: true
			};

			const longTermArtistsOptions = {
				url: `https://api.spotify.com/v1/me/top/artists?limit=20&time_range=long_term`,
				headers: { Authorization: `Bearer ${access_token}` },
				json: true
			};

			const longTermTracksOptions = {
				url: `https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=medium_term`,
				headers: { Authorization: `Bearer ${access_token}` },
				json: true
			};

			request.get(shortTermArtistsOptions, (error, response, body) => {
				let result = formatArtistResponse(body.items);
				let artistInfo = result[0];
				let frequentFormatted = result[1];
				let extraFormatted = result[2];

				this.setState({
					shortTermArtists: artistInfo,
					shortTermGenres: frequentFormatted,
					shortTermExtraGenres: extraFormatted
				});
			});

			request.get(medTermArtistsOptions, (error, response, body) => {
				let result = formatArtistResponse(body.items);
				let artistInfo = result[0];
				let frequentFormatted = result[1];
				let extraFormatted = result[2];

				this.setState({
					medTermArtists: artistInfo,
					medTermGenres: frequentFormatted,
					medTermExtraGenres: extraFormatted
				});
			});

			request.get(longTermArtistsOptions, (error, response, body) => {
				let result = formatArtistResponse(body.items);
				let artistInfo = result[0];
				let frequentFormatted = result[1];
				let extraFormatted = result[2];

				this.setState({
					longTermArtists: artistInfo,
					longTermGenres: frequentFormatted,
					longTermExtraGenres: extraFormatted,
					loading: false
				});
			});

			request.get(shortTermTracksOptions, (error, response, body) => {
				let result = formatTrackResponse(body.items);

				this.setState({
					shortTermTracks: result
				});
			});

			request.get(medTermTracksOptions, (error, response, body) => {
				let result = formatTrackResponse(body.items);

				this.setState({
					medTermTracks: result
				});
			});

			request.get(longTermTracksOptions, (error, response, body) => {
				let result = formatTrackResponse(body.items);

				this.setState({
					longTermTracks: result
				});
			});
		});
	}

	getStepContent(stepIndex) {
		const cloudColor = {
			short: {
				luminosity: 'bright',
				hue: 'purple'
			},
			med: {
				luminosity: 'bright',
				hue: 'pink'
			},
			long: {
				luminosity: 'bright',
				hue: 'blue'
			}
		};
		switch (stepIndex) {
			case 0:
				return (
					<StepContent
						artistImages={this.state.shortTermArtists}
						graphData={this.state.shortTermGenres}
						extraGenres={this.state.shortTermExtraGenres}
						cloudColors={cloudColor.short}
						trackImages={this.state.shortTermTracks}
					/>
				);
			case 1:
				return (
					<StepContent
						artistImages={this.state.medTermArtists}
						graphData={this.state.medTermGenres}
						extraGenres={this.state.medTermExtraGenres}
						cloudColors={cloudColor.med}
						trackImages={this.state.medTermTracks}
					/>
				);
			case 2:
				return (
					<StepContent
						artistImages={this.state.longTermArtists}
						graphData={this.state.longTermGenres}
						extraGenres={this.state.longTermExtraGenres}
						cloudColors={cloudColor.long}
						trackImages={this.state.longTermTracks}
					/>
				);
			default:
				return <h1>Error :/</h1>;
		}
	}

	render() {
		const { stepIndex } = this.state;
		let Loaded;

		const styles = {
			loadingContainer: {
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: 450
			},
			loadedContainer: {
				width: '100%',
				margin: 'auto'
			}
		};

		if (this.state.loading) {
			Loaded = (
				<div style={styles.loadingContainer}>
					<CircularProgress size={200} thickness={5} color={purpleA400} />
				</div>
			);
		} else {
			Loaded = (
				<div>
					<MyStepper
						stepIndex={stepIndex}
						handleShortClick={() => this.setState({ stepIndex: 0 })}
						handleMedClick={() => this.setState({ stepIndex: 1 })}
						handleLongClick={() => this.setState({ stepIndex: 2 })}
					/>
					{this.getStepContent(stepIndex)}
				</div>
			);
		}

		return <div>{Loaded}</div>;
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

export default connect(mapStateToProps)(ArtistsTab);
