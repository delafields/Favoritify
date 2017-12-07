import * as _ from 'lodash';

export function formatArtistResponse(response) {
	// GENERAL
	/* Data to be sent as props.artistData */
	let artistInfo = response.map(artist => ({
		artistName: artist.name,
		artistImage: artist.images[0].url,
		artistPopularity: artist.popularity
	}));

	// POPULARITY
	/* Averages popularity across top artists */
	let avgArtistPopularity = parseInt(
		_.divide(
			_.sumBy(response, artist => {
				return artist.popularity;
			}),
			20
		),
		10
	);

	// GENRES
	/* Creates an array of all genres from each artist */
	let allGenres = response
		.map(band => {
			return band.genres;
		})
		.reduce((a, b) => {
			return a.concat(b);
		});

	/* Attaches a frequency count to each genre */
	let genreCount = _.countBy(allGenres, _.identity);

	/* Returns genres that show up more than twice */
	let frequentGenres = _.pickBy(genreCount, (v, k) => {
		return v > 2;
	});

	/* Converts the frequent (> 2) genres to an array */
	let frequentToArr = _.map(_.toPairs(frequentGenres), d => _.fromPairs([d]));

	/* Formats the frequent array to a form that fits the genre pie */
	/* Sorts by descending count (for the genre list) */
	let frequentFormatted = frequentToArr
		.map(obj => {
			const key = Object.keys(obj)[0];
			return {
				name: key,
				count: obj[key]
			};
		})
		.sort((a, b) => {
			return a.count - b.count;
		})
		.reverse();

	/* Cuts the frequent genres to a Top 10 */
	if (frequentFormatted.length > 10) {
		frequentFormatted = frequentFormatted.slice(0, 10);
	}

	/* Returns genres that show up twice or less (extra genres) */
	let extraGenres = _.pickBy(genreCount, (v, k) => {
		return v <= 2;
	});

	/* Converts the extra genres to a single array */
	let extraToArr = _.map(_.toPairs(extraGenres), d => _.fromPairs([d]));

	/* Cuts the array to 30 genres max */
	if (extraToArr.length > 30) {
		extraToArr = extraToArr.slice(0, 30);
	}

	/* Converts the array to an object form that fits the word cloud */
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
	// GENERAL
	/* Data to be passed as props.trackData */
	let trackInfo = response.map(track => ({
		trackName: track.name,
		artistName: track.artists['0'].name,
		trackImage: track.album.images[0].url
	}));

	// FEATURES
	/* Creates a comma separated array of all track id's (for audio features) */
	let trackIDs = response
		.map(track => {
			return track.id;
		})
		.join(',');

	// POPULARITY
	/* Avgs track popularity */
	let avgTrackPopularity = parseInt(
		_.divide(
			_.sumBy(response, band => {
				return band.popularity;
			}),
			20
		),
		10
	);

	return [trackInfo, avgTrackPopularity, trackIDs];
}

export function formatFeaturesResponse(response) {
	let audioFeatures = [];
	let temp = {};
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

	/* Averages each feature (above) */
	_.forEach(features, feature => {
		temp[feature] = _.round(
			_.divide(
				_.sumBy(response, track => {
					return track[feature];
				}),
				20
			),
			2
		);
	});

	/* Creates an object to be used in the Sound Graph */
	audioFeatures.push(
		_.omit(temp, [
			'danceability',
			'energy',
			'valence',
			'instrumentalness',
			'liveness',
			'speechiness'
		])
	);

	/* Data for the loudness/tempo Bars */
	audioFeatures.push(_.omit(temp, ['loudness', 'tempo']));

	/* Generates the Italian Tempo name based on avg track tempo */
	let tempoName;
	let bpm = audioFeatures[0].tempo;
	switch (true) {
		case bpm >= 200:
			tempoName = 'Prestissimo';
			break;
		case bpm >= 180:
			tempoName = 'Presto';
			break;
		case bpm >= 170:
			tempoName = 'Vivace';
			break;
		case bpm >= 161:
			tempoName = 'Allegro Vivace';
			break;
		case bpm >= 140:
			tempoName = 'Molto Allegro';
			break;
		case bpm >= 130:
			tempoName = 'Allegro con Brio';
			break;
		case bpm >= 120:
			tempoName = 'Allegro';
			break;
		case bpm >= 117:
			tempoName = 'Allegretto';
			break;
		case bpm === 116:
			tempoName = 'Allegro Moderato';
			break;
		case bpm >= 101:
			tempoName = 'Moderato';
			break;
		case bpm >= 91:
			tempoName = 'Andante Moderato';
			break;
		case bpm >= 84:
			tempoName = 'Andante';
			break;
		case bpm >= 77:
			tempoName = 'Andantino';
			break;
		case bpm >= 61:
			tempoName = 'Adagio';
			break;
		case bpm >= 51:
			tempoName = 'Larghetto';
			break;
		case bpm >= 31:
			tempoName = 'Largo';
			break;
		case bpm >= 30:
			tempoName = 'Grave';
			break;
		default:
			tempoName = 'Error';
	}
	/* Adds the result of the switch to the returned object */
	audioFeatures[0].tempoName = tempoName;

	return audioFeatures;
}
