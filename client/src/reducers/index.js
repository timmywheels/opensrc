import { combineReducers } from 'redux';
import trendingReposReducer from './trendingReposReducer';
import userReposReducer from './userReposReducer';

export default combineReducers({
	trending: trendingReposReducer,
	user: userReposReducer
});
