import { FETCH_ARTIST_DATA, FETCH_TRACK_DATA } from '../actions/types';

export default function(state = {}, action) {
	console.log(action);
	switch (action.type) {
		case FETCH_ARTIST_DATA:
			return action.payload;
		case FETCH_TRACK_DATA:
			return action.payload;
		default:
			return state;
	}
}
