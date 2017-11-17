import * as _ from 'lodash';

export function formatArtistResponse(response) {
	let artistInfo = response.map(band => ({
		artistName: band.name,
		artistImage: band.images[0].url
	}));

	let allGenres = response
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

	let frequentToArr = _.map(_.toPairs(frequentGenres), d => _.fromPairs([d]));

	let frequentFormatted = frequentToArr.map(obj => {
		const key = Object.keys(obj)[0];
		return {
			name: key,
			count: obj[key]
		};
	});

	let extraGenres = _.pickBy(genresSorted, (v, k) => {
		return v <= 2;
	});

	let extraToArr = _.map(_.toPairs(extraGenres), d => _.fromPairs([d]));

	let extraFormatted = extraToArr.map(obj => {
		const key = Object.keys(obj)[0];
		return {
			value: key,
			count: obj[key]
		};
	});

	return [artistInfo, frequentFormatted, extraFormatted];
}

export function formatTrackResponse(response) {
	let artistInfo = response.map(track => ({
		trackName: track.name,
		artistName: track.artists['0'].name,
		trackImage: track.album.images[0].url
	}));
	return artistInfo;
}
