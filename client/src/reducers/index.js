import { combineReducers } from 'redux';
import authReducer from './authReducer'
import trendingReposReducer from './trendingReposReducer';
import userReposReducer from './userReposReducer';

export default combineReducers({
	auth: authReducer,
	trending: trendingReposReducer,
	user: userReposReducer
});
