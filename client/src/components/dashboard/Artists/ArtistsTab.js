import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { fetchArtistData } from '../../../actions';
import axios from 'axios';
import request from 'request';

import { formatResponse } from '../../../utils/format_response';

import CircularProgress from 'material-ui/CircularProgress';
import { Step, Stepper, StepButton } from 'material-ui/Stepper';

import Graph from '../Graph';
import WordCloud from '../WordCloud';
import Avatars from './Avatars';
import AvatarCard from '../Cards';

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
		const shortCloudColor = { luminosity: 'light', hue: 'blue' };
		const medCloudColor = { luminosity: 'bright', hue: 'blue' };
		const longCloudColor = { luminosity: 'dark', hue: 'blue' };
		switch (stepIndex) {
			case 0:
				return (
					<div>
						<Avatars artists={this.state.shortTermArtists} />

						<AvatarCard title="Top Artists of The Short Term">
							<Graph data={this.state.shortTermGenres} />
						</AvatarCard>
						<WordCloud
							tags={this.state.shortTermExtraGenres}
							colorOptions={shortCloudColor}
						/>
					</div>
				);
			case 1:
				return (
					<div>
						<Avatars artists={this.state.medTermArtists} />
						<Graph data={this.state.medTermGenres} />
						<WordCloud
							tags={this.state.medTermExtraGenres}
							colorOptions={medCloudColor}
						/>
					</div>
				);
			case 2:
				return (
					<div>
						<Avatars artists={this.state.longTermArtists} />
						<Graph data={this.state.longTermGenres} />
						<WordCloud
							tags={this.state.longTermExtraGenres}
							colorOptions={longCloudColor}
						/>
					</div>
				);
			default:
				return <h1>Error :/</h1>;
		}
	}

	render() {
		const { stepIndex } = this.state;

		let Loaded;
		if (this.state.loading) {
			Loaded = <CircularProgress size={80} thickness={5} />;
		} else {
			Loaded = (
				<div>
					<div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
						<Stepper linear={false} activeStep={stepIndex}>
							<Step>
								<StepButton onClick={() => this.setState({ stepIndex: 0 })}>
									Short Term
								</StepButton>
							</Step>
							<Step>
								<StepButton onClick={() => this.setState({ stepIndex: 1 })}>
									Medium Term
								</StepButton>
							</Step>
							<Step>
								<StepButton onClick={() => this.setState({ stepIndex: 2 })}>
									Long Term
								</StepButton>
							</Step>
						</Stepper>
						{this.getStepContent(stepIndex)}
					</div>
				</div>
			);
		}

		return (
			<div>
				<h2>{this.props.auth.spotifyID}</h2>
				{Loaded}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

//export default connect(mapStateToProps, { fetchArtistData })(ArtistsTab);
export default connect(mapStateToProps)(ArtistsTab);
