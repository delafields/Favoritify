import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import axios from 'axios';
import request from 'request';

import {
	formatArtistResponse,
	formatTrackResponse
} from '../utils/format_response';
import { graphColorsUtil } from '../utils/graph_colors';

import SwipeableViews from 'react-swipeable-views';

import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';
import CircularProgress from 'material-ui/CircularProgress';
import {
	blueGrey900,
	indigoA700,
	purpleA400,
	deepPurpleA700
} from 'material-ui/styles/colors';

import StepContent from './dashboard/shared/StepContent';

class Display extends Component {
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
			slideIndex: 0
		};
		this.fetchArtists = this.fetchArtists.bind(this);
	}

	componentDidMount() {
		this.props.fetchUser();
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
					longTermExtraGenres: extraFormatted
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
					longTermTracks: result,
					loading: false
				});
			});
		});
	}

	handleChange = value => {
		this.setState({
			slideIndex: value
		});
	};

	render() {
		const styles = {
			appBar: {
				title: {
					textAlign: 'center',
					color: 'white',
					fontWeight: '300'
				},
				background: {
					backgroundColor: blueGrey900
				},
				button: {
					marginTop: '10px'
				}
			},
			tabs: {
				inkBar: {
					background: blueGrey900,
					height: '3px'
				},
				label: {
					color: 'white',
					fontWeight: 300
				},
				shortTab: {
					backgroundColor: indigoA700
				},
				medTab: {
					backgroundColor: deepPurpleA700
				},
				longTab: {
					backgroundColor: purpleA400
				}
			},
			loadingContainer: {
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: 450
			}
		};

		const cloudColor = {
			short: {
				luminosity: 'bright',
				hue: 'blue'
			},
			med: {
				luminosity: 'bright',
				hue: 'purple'
			},
			long: {
				luminosity: 'bright',
				hue: 'pink'
			}
		};

		let Loaded;
		if (this.state.loading) {
			Loaded = (
				<div style={styles.loadingContainer}>
					<CircularProgress size={200} thickness={5} color={purpleA400} />
				</div>
			);
		} else {
			Loaded = (
				<div>
					<SwipeableViews
						index={this.state.slideIndex}
						onChangeIndex={this.handleChange}
					>
						<StepContent
							artistImages={this.state.shortTermArtists}
							graphData={this.state.shortTermGenres}
							extraGenres={this.state.shortTermExtraGenres}
							cloudColors={cloudColor.short}
							trackImages={this.state.shortTermTracks}
							graphColor={graphColorsUtil.short}
							graphFill={indigoA700}
						/>
						<StepContent
							artistImages={this.state.medTermArtists}
							graphData={this.state.medTermGenres}
							extraGenres={this.state.medTermExtraGenres}
							cloudColors={cloudColor.med}
							trackImages={this.state.medTermTracks}
							graphColor={graphColorsUtil.med}
							graphFill={deepPurpleA700}
						/>
						<StepContent
							artistImages={this.state.longTermArtists}
							graphData={this.state.longTermGenres}
							extraGenres={this.state.longTermExtraGenres}
							cloudColors={cloudColor.long}
							trackImages={this.state.longTermTracks}
							graphColor={graphColorsUtil.long}
							graphFill={purpleA400}
						/>
					</SwipeableViews>
				</div>
			);
		}

		return (
			<div>
				<AppBar
					title="W K M D Y L"
					titleStyle={styles.appBar.title}
					style={styles.appBar.background}
					iconElementLeft={<h4>{this.props.auth.spotifyID} </h4>}
					iconElementRight={
						<RaisedButton
							style={styles.appBar.button}
							label="logout"
							href="/api/logout"
						/>
					}
				/>
				<Tabs
					onChange={this.handleChange}
					value={this.state.slideIndex}
					inkBarStyle={styles.tabs.inkBar}
				>
					<Tab
						label={
							<span style={styles.tabs.label}>
								Short Term<br />(4 weeks)
							</span>
						}
						style={styles.tabs.shortTab}
						value={0}
					/>
					<Tab
						label={
							<span style={styles.tabs.label}>
								Medium Term<br />(6 Months)
							</span>
						}
						style={styles.tabs.medTab}
						value={1}
					/>
					<Tab
						label={
							<span style={styles.tabs.label}>
								Long Term<br />(Several Years)
							</span>
						}
						style={styles.tabs.longTab}
						value={2}
					/>
				</Tabs>
				<div>{Loaded}</div>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps, actions)(Display);
