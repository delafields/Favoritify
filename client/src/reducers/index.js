import { combineReducers } from 'redux';
import authReducer from './authReducer';
import artistReducer from './artistReducer';
import trackReducer from './trackReducer';

export default combineReducers({
	auth: authReducer,
	artists: artistReducer,
	tracks: trackReducer
});
