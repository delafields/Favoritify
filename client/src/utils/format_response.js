import * as _ from 'lodash';

export function formatArtistResponse(response) {
	let artistInfo = response.map(band => ({
		artistName: band.name,
		artistImage: band.images[0].url
	}));

	let avgArtistPopularity = _.divide(
		_.sumBy(response, band => {
			return band.popularity;
		}),
		20
	);

	// Creates a single array of all genres
	let allGenres = response
		.map(band => {
			return band.genres;
		})
		.reduce((a, b) => {
			return a.concat(b);
		});

	// Attaches a frequency count to each genre
	let genreCount = _.countBy(allGenres, _.identity);

	// Returns genres with count > 2
	let frequentGenres = _.pickBy(genreCount, (v, k) => {
		return v > 2;
	});

	// Converts to array
	let frequentToArr = _.map(_.toPairs(frequentGenres), d => _.fromPairs([d]));

	// Formats to Victory graph format
	let frequentFormatted = frequentToArr.map(obj => {
		const key = Object.keys(obj)[0];
		return {
			name: key,
			count: obj[key]
		};
	});

	// Returns genres w/ count < 2
	let extraGenres = _.pickBy(genreCount, (v, k) => {
		return v <= 2;
	});

	// Converts to array
	let extraToArr = _.map(_.toPairs(extraGenres), d => _.fromPairs([d]));

	if (extraToArr.length > 30) {
		extraToArr = extraToArr.slice(0, 30);
	}

	// Converts to word cloud format
	let extraFormatted = extraToArr.map(obj => {
		const key = Object.keys(obj)[0];
		return {
			value: key,
			count: obj[key]
		};
	});

	return [artistInfo, frequentFormatted, extraFormatted, avgArtistPopularity];
}

export function formatTrackResponse(response) {
	let trackInfo = response.map(track => ({
		trackName: track.name,
		artistName: track.artists['0'].name,
		trackImage: track.album.images[0].url
	}));

	let trackIDs = response
		.map(track => {
			return track.id;
		})
		.join(',');

	let avgTrackPopularity = _.divide(
		_.sumBy(response, band => {
			return band.popularity;
		}),
		20
	);

	return [trackInfo, avgTrackPopularity, trackIDs];
}

export function formatFeaturesResponse(response) {
	let audioFeatures = {};
	let features = [
		'danceability',
		'energy',
		'loudness',
		'tempo',
		'valence',
		'instrumentalness',
		'liveness',
		'speechiness'
	];

	_.forEach(features, feature => {
		audioFeatures[feature] = _.round(
			_.divide(
				_.sumBy(response, track => {
					return track[feature];
				}),
				20
			),
			2
		);
	});

	/*
	audioFeatures.danceability =
		_.sumBy(response, track => {
			return track.danceability;
		}) / 20;

	audioFeatures.energy =
		_.sumBy(response, track => {
			return track.energy;
		}) / 20;

	audioFeatures.loudness =
		_.sumBy(response, track => {
			return track.loudness;
		}) / 20;

	audioFeatures.tempo =
		_.sumBy(response, track => {
			return track.tempo;
		}) / 20;

	audioFeatures.valence =
		_.sumBy(response, track => {
			return track.valence;
		}) / 20;

	audioFeatures.instrumentalness =
		_.sumBy(response, track => {
			return track.instrumentalness;
		}) / 20;

	audioFeatures.liveness =
		_.sumBy(response, track => {
			return track.liveness;
		}) / 20;

	audioFeatures.speechiness =
		_.sumBy(response, track => {
			return track.speechiness;
		}) / 20;
		*/

	return audioFeatures;
}
