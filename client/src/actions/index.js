import axios from 'axios';
import request from 'request';
import { formatArtistResponse } from '../utils/format_response';
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
	const artistsResponse = {};

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
			let result = formatArtistResponse(body.items);
			artistsResponse['short'] = result;
		});

		request.get(medTermOptions, (error, response, body) => {
			let result = formatArtistResponse(body.items);
			artistsResponse['medium'] = result;
		});

		request.get(longTermOptions, (error, response, body) => {
			let result = formatArtistResponse(body.items);
			artistsResponse['long'] = result;
		});
	});
	dispatch({ type: FETCH_ARTIST_DATA, payload: artistsResponse });
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
