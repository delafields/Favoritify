import { FETCH_TRACK_DATA } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_TRACK_DATA:
			return action.payload;
		default:
			return state;
	}
}
