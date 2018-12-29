import axios from 'axios';
import { FETCH_USER, FETCH_TRENDING_REPOS, FETCH_USER_REPOS } from './types';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchTrendingRepos = () => async dispatch => {
	const res = await axios.get('/api/trending');
	dispatch({ type: FETCH_TRENDING_REPOS, payload: res.data });
};

export const fetchUserRepos = () => async dispatch => {
	const res = await axios.get('/api/users/:user');
	dispatch({ type: FETCH_USER_REPOS, payload: res.data });
};
