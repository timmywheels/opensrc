import React, {Component} from 'react';
import View from './View';
import * as github from '../api';

export default class extends Component {

	state = {
		username: "",
	};

	onChange = (username) => {
		this.setState({username});
	};

	onSubmit = () => {
		github.api(this.state.username);
	};

	render() {
		console.log("index.js Props:", this.props);
		console.log("index.js State:", this.state);
		return (
			<View {...this.props} {...this.state} user={github.user} onChange={this.onChange} onSubmit={this.onSubmit}/>
		)
	}
}