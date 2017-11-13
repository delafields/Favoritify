import { FETCH_USER, FETCH_REFRESH_TOKEN } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false;
		case FETCH_REFRESH_TOKEN:
			return action.payload;
		default:
			return state;
	}
}
