import axios from 'axios';
import { FETCH_USER, FETCH_REFRESH_TOKEN } from './types';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchRefreshToken = () => async dispatch => {
	const res = await axios.get('/api/refresh_token');

	dispatch({ type: FETCH_REFRESH_TOKEN, payload: res.data });
};
