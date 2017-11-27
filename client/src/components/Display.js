import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, trackThunk, artistThunk } from '../actions';
import axios from 'axios';
import request from 'request';
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
			slideIndex: 0
		};
	}

	componentDidMount() {
		this.props.fetchUser();
		this.props.trackThunk();
		this.props.artistThunk();
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

		let Test;
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
		if (
			tracksFetching === true &&
			tracksFetched === false &&
			artistsFetching === true &&
			artistsFetched === false
		) {
			Test = (
				<div style={styles.loadingContainer}>
					<CircularProgress size={200} thickness={5} color={purpleA400} />
				</div>
			);
		} else {
			Test = (
				<div>
					<SwipeableViews
						index={this.state.slideIndex}
						onChangeIndex={this.handleChange}
					>
						<StepContent
							artistImages={shortTermArtists}
							graphData={shortTermGenres}
							extraGenres={shortTermExtraGenres}
							cloudColors={cloudColor.short}
							trackImages={shortTermTracks}
							graphColor={graphColorsUtil.short}
							graphFill={indigoA700}
						/>
						<StepContent
							artistImages={medTermArtists}
							graphData={medTermGenres}
							extraGenres={medTermExtraGenres}
							cloudColors={cloudColor.med}
							trackImages={medTermTracks}
							graphColor={graphColorsUtil.med}
							graphFill={deepPurpleA700}
						/>
						<StepContent
							artistImages={longTermArtists}
							graphData={longTermGenres}
							extraGenres={longTermExtraGenres}
							cloudColors={cloudColor.long}
							trackImages={longTermTracks}
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
				<div>{Test}</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		trackThunk: () => dispatch(trackThunk()),
		artistThunk: () => dispatch(artistThunk()),
		fetchUser: () => dispatch(fetchUser())
	};
}

function mapStateToProps({ auth, tracks, artists }) {
	return { auth, tracks, artists };
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);
