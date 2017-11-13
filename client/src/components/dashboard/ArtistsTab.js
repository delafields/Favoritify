import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
//import { fetchArtistData } from '../../actions';
import axios from 'axios';
import request from 'request';
import * as _ from 'lodash';

import CircularProgress from 'material-ui/CircularProgress';
import Avatar from 'material-ui/Avatar';
import ReactTooltip from 'react-tooltip';

import Graph from './Graph';

class ArtistsTab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shortTermArtists: '',
			shortGenres: [],
			shortTermExtraGenres: [],
			medTermArtists: '',
			medTermGenres: [],
			medTermExtraGenres: [],
			longTermArtists: '',
			longTermGenres: [],
			longTermExtraGenres: [],
			loading: true
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
				let artistInfo = body.items.map(band => ({
					artistName: band.name,
					artistImage: band.images[0].url
				}));

				let allGenres = body.items
					.map(band => {
						return band.genres;
					})
					.reduce((a, b) => {
						return a.concat(b);
					});

				let genresSorted = _.countBy(allGenres, _.identity);

				let frequentGenres = _.pickBy(genresSorted, (v, k) => {
					return v > 2;
				});

				let extraGenres = _.pickBy(genresSorted, (v, k) => {
					return v <= 2;
				});

				this.setState({
					shortTermArtists: artistInfo,
					shortTermGenres: frequentGenres,
					shortTermExtraGenres: extraGenres
				});
				console.log(this.state.shortTermGenres);
			});

			request.get(medTermOptions, (error, response, body) => {
				let artistInfo = body.items.map(band => ({
					artistName: band.name,
					artistImage: band.images[0].url
				}));

				let allGenres = body.items
					.map(band => {
						return band.genres;
					})
					.reduce((a, b) => {
						return a.concat(b);
					});

				let genresSorted = _.countBy(allGenres, _.identity);

				let frequentGenres = _.pickBy(genresSorted, (v, k) => {
					return v > 2;
				});

				let extraGenres = _.pickBy(genresSorted, (v, k) => {
					return v <= 2;
				});

				this.setState({
					medTermArtists: artistInfo,
					medTermGenres: frequentGenres,
					medTermExtraGenres: extraGenres
				});
				console.log(this.state.medTermGenres);
			});

			request.get(longTermOptions, (error, response, body) => {
				let artistInfo = body.items.map(band => ({
					artistName: band.name,
					artistImage: band.images[0].url
				}));

				let allGenres = body.items
					.map(band => {
						return band.genres;
					})
					.reduce((a, b) => {
						return a.concat(b);
					});

				let genresSorted = _.countBy(allGenres, _.identity);

				let frequentGenres = _.pickBy(genresSorted, (v, k) => {
					return v > 2;
				});

				let extraGenres = _.pickBy(genresSorted, (v, k) => {
					return v <= 2;
				});

				this.setState({
					longTermArtists: artistInfo,
					longTermGenres: frequentGenres,
					longTermExtraGenres: extraGenres,
					loading: false
				});
				console.log(this.state.longTermGenres);
			});
		});
	}

	ShowArtists(props) {
		const artists = props.artists;

		const listItems = artists.map(artist => (
			<li key={artist.artistName}>
				<a data-tip data-for={artist.artistName}>
					<Avatar src={artist.artistImage} alt="" />
				</a>
				<ReactTooltip id={artist.artistName} type="error">
					<span>{artist.artistName}</span>
				</ReactTooltip>
			</li>
		));
		return <ul>{listItems}</ul>;
	}

	render() {
		let artistOne = null;
		if (this.state.loading === true) {
			artistOne = <CircularProgress size={80} thickness={5} />;
		} else {
			artistOne = <h1>hi</h1>;
		}

		return (
			<div>
				<h2>{this.props.auth.spotifyID}</h2>
				{artistOne}
				{this.showArtists}
				<Graph />
			</div>
		);
	}
}

function mapStateToProps({ auth, artists }) {
	return {
		artists,
		auth
	};
}

//export default connect(mapStateToProps, { fetchArtistData })(ArtistsTab);
export default connect(mapStateToProps)(ArtistsTab);
