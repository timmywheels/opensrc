import { combineReducers } from 'redux';
import trendingReposReducer from './trendingReposReducer';

export default combineReducers({
	trending: trendingReposReducer,
});