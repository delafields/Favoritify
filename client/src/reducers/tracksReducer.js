import {
	FETCH_TRACK_DATA,
	FETCH_TRACK_SUCCESS,
	FETCH_TRACK_FAILURE
} from '../actions/types';

const initialState = {
	trackData: [],
	tracksFetched: false,
	tracksFetching: false,
	hasErrored: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_TRACK_DATA:
			return {
				...state,
				trackData: [],
				tracksFetching: true
			};
		case FETCH_TRACK_SUCCESS:
			return {
				...state,
				tracksFetching: false,
				tracksFetched: true,
				trackData: action.data
			};
		case FETCH_TRACK_FAILURE:
			return {
				...state,
				tracksFetching: false,
				hasErrored: true
			};
		default:
			return state;
	}
}
