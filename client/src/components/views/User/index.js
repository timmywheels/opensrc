import React, {Component} from 'react';
import View from './View';
import user from './getData';

export default class extends Component {

	state = {
		username: "timwheelercom"
	};

	render() {
		// const userData = Object.entries(user).map(([key, val], i) => {
		// 	if (key !== 'repos') {
		// 		return <div key={'key-' + i}>{`${key}: ${val}`}</div>;
		// 	}
		// });

		return (
			<View {...this.props} {...this.state} user={user}/>
		)
	}
}