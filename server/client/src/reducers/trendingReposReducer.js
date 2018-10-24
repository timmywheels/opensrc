import { FETCH_TRENDING_REPOS } from '../actions/types';

export default function(state = [], action) {
	// console.log('action:',action)
	switch (action.type) {
		case FETCH_TRENDING_REPOS:
			return action.payload || false;
		default:
			return state;
	}
}