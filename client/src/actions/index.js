import axios from 'axios';
import request from 'request';
import {
	FETCH_USER,
	FETCH_REFRESH_TOKEN,
	FETCH_ARTIST_DATA,
	FETCH_TRACK_DATA
} from './types';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchRefreshToken = () => async dispatch => {
	const res = await axios.get('/api/refresh_token');

	dispatch({ type: FETCH_REFRESH_TOKEN, payload: res.data });
};

export const fetchArtistData = () => dispatch => {
	let artistData = [];

	axios.get('/api/refresh_token').then(response => {
		let { access_token } = response.data;

		const STAOptions = {
			url: `https://api.spotify.com/v1/me/top/artists?limit=20&time_range=short_term`,
			headers: { Authorization: `Bearer ${access_token}` },
			json: true
		};

		request.get(STAOptions, (error, response, body) => {
			let tempSTA = body.items;

			let filtSTA = tempSTA.map(band => ({
				bandName: band.name,
				bandImg: band.images[0].url
			}));

			artistData.push(filtSTA);
		});

		const MTAOptions = {
			url: `https://api.spotify.com/v1/me/top/artists?limit=20&time_range=medium_term`,
			headers: { Authorization: `Bearer ${access_token}` },
			json: true
		};
		request.get(MTAOptions, (error, response, body) => {
			let tempMTA = body.items;

			let filtMTA = tempMTA.map(band => ({
				bandName: band.name,
				bandImg: band.images[0].url
			}));

			artistData.push(filtMTA);
		});

		const LTAOptions = {
			url: `https://api.spotify.com/v1/me/top/artists?limit=20&time_range=long_term`,
			headers: { Authorization: `Bearer ${access_token}` },
			json: true
		};
		request.get(LTAOptions, (error, response, body) => {
			const tempLTA = body.items;

			let filtLTA = tempLTA.map(band => ({
				bandName: band.name,
				bandImg: band.images[0].url
			}));

			artistData.push(filtLTA);
		});

		dispatch({ type: FETCH_ARTIST_DATA, payload: artistData });
	});
};

export const fetchTrackData = () => dispatch => {
	let trackData = [];

	axios.get('/api/refresh_token').then(response => {
		let { access_token } = response.data;

		const STTOptions = {
			url: `https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=short_term`,
			headers: { Authorization: `Bearer ${access_token}` },
			json: true
		};
		request.get(STTOptions, (error, response, body) => {
			const STT = body.items;
			trackData.push(STT);
		});

		const MTTOptions = {
			url: `https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=medium_term`,
			headers: { Authorization: `Bearer ${access_token}` },
			json: true
		};
		request.get(MTTOptions, (error, response, body) => {
			const MTT = body.items;
			trackData.push(MTT);
		});

		const LTTOptions = {
			url: `https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=long_term`,
			headers: { Authorization: `Bearer ${access_token}` },
			json: true
		};
		request.get(LTTOptions, (error, response, body) => {
			const LTT = body.items;
			trackData.push(LTT);
		});

		dispatch({ type: FETCH_TRACK_DATA, payload: trackData });
	});
};
