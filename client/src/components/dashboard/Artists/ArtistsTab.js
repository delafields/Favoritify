import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import request from 'request';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import { formatResponse } from '../../../utils/format_response';

import CircularProgress from 'material-ui/CircularProgress';
import { blueGrey900, indigoA700, purpleA400 } from 'material-ui/styles/colors';

import MyStepper from '../shared/Stepper';
import StepContent from '../shared/StepContent';

class ArtistsTab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shortTermArtists: '',
			shortTermGenres: [],
			shortTermExtraGenres: [],
			medTermArtists: '',
			medTermGenres: [],
			medTermExtraGenres: [],
			longTermArtists: '',
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

			const url =
				'https://api.spotify.com/v1/me/top/artists?limit=20&time_range=';

			const shortTermOptions = {
				url: `${url}short_term`,
				headers: { Authorization: `Bearer ${access_token}` },
				json: true
			};

			const medTermOptions = {
				url: `${url}medium_term`,
				headers: { Authorization: `Bearer ${access_token}` },
				json: true
			};

			const longTermOptions = {
				url: `${url}long_term`,
				headers: { Authorization: `Bearer ${access_token}` },
				json: true
			};

			request.get(shortTermOptions, (error, response, body) => {
				let result = formatResponse(body.items);
				let artistInfo = result[0];
				let frequentFormatted = result[1];
				let extraFormatted = result[2];

				this.setState({
					shortTermArtists: artistInfo,
					shortTermGenres: frequentFormatted,
					shortTermExtraGenres: extraFormatted
				});
			});

			request.get(medTermOptions, (error, response, body) => {
				let result = formatResponse(body.items);
				let artistInfo = result[0];
				let frequentFormatted = result[1];
				let extraFormatted = result[2];

				this.setState({
					medTermArtists: artistInfo,
					medTermGenres: frequentFormatted,
					medTermExtraGenres: extraFormatted
				});
			});

			request.get(longTermOptions, (error, response, body) => {
				let result = formatResponse(body.items);
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
						avatarImages={this.state.shortTermArtists}
						graphData={this.state.shortTermGenres}
						extraGenres={this.state.shortTermExtraGenres}
						cloudColors={cloudColor.short}
					/>
				);
			case 1:
				return (
					<StepContent
						avatarImages={this.state.medTermArtists}
						graphData={this.state.medTermGenres}
						extraGenres={this.state.medTermExtraGenres}
						cloudColors={cloudColor.med}
					/>
				);
			case 2:
				return (
					<StepContent
						avatarImages={this.state.longTermArtists}
						graphData={this.state.longTermGenres}
						extraGenres={this.state.longTermExtraGenres}
						cloudColors={cloudColor.long}
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
