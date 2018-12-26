import React, {Component} from 'react';
import View from './View';
import * as api from '../api';

export default class extends Component {

	state = {
		username: "",
	};

	onChange = (username) => {
		this.setState({username});
	};

	onSubmit = (username) => {
		this.setState({username}, api.api(username));
	};

	render() {
		console.log("index.js Props:", this.props);
		console.log("index.js State:", this.state);
		return (
			<View {...this.props} {...this.state} user={api.user} onChange={this.onChange} onSubmit={this.onSubmit}/>
		)
	}
}