import { FETCH_ARTIST_DATA } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_ARTIST_DATA:
			return action.payload;
		default:
			return state;
	}
}
