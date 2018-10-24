import axios from 'axios';
import { FETCH_TRENDING_REPOS } from './types';

export const fetchTrendingRepos = () => async dispatch => {
	const res = await axios.get('/api/trending');

	dispatch({ type: FETCH_TRENDING_REPOS, payload: res.data });
};