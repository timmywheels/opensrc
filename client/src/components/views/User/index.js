import React, { Component } from 'react';
import user from './getData';

export default class extends Component {

	state = {
		username: "timwheelercom"
	}

	render() {
		const userData = Object.entries(user).map(([key, val], i) => {
			if (key !== 'repos'){
				return <div key={'key-'+ i}>{`${key}: ${val}`}</div>;
			}
		});

		return (
			<div>
				<div>
					<h3>User Component</h3>
					<p>{userData}</p>
				</div>
			</div>

		)
	}
}