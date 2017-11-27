import {
	FETCH_ARTIST_DATA,
	FETCH_ARTIST_SUCCESS,
	FETCH_ARTIST_FAILURE
} from '../actions/types';

const initialState = {
	artistData: [],
	artistsFetched: false,
	artistsFetching: false,
	hasErrored: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_ARTIST_DATA:
			return {
				...state,
				artistData: [],
				artistsFetching: true
			};
		case FETCH_ARTIST_SUCCESS:
			return {
				...state,
				artistsFetching: false,
				artistsFetched: true,
				artistData: action.data
			};
		case FETCH_ARTIST_FAILURE:
			return {
				...state,
				artistsFetching: false,
				hasErrored: true
			};
		default:
			return state;
	}
}
