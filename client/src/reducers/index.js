import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tracksReducer from './tracksReducer';
import artistsReducer from './artistsReducer';

export default combineReducers({
	auth: authReducer,
	tracks: tracksReducer,
	artists: artistsReducer
});
