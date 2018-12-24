import React, {Component} from 'react';
import View from './View';
import * as api from "../api"

export default class extends Component {

	state = {
		username: ""
	};

	onChange = (username) => {
		this.setState({
			username
		});
		console.log("Home/index.js State:", this.state)
	};

	onSubmit = (username) => {
		this.setState({
			username
		});
		api.api(username);
	};

	render() {
		console.log("Home/index.js Props:", this.props)
		return <View {...this.props} {...this.state} username={this.state.username} user={api.user} onChange={this.onChange} onSubmit={this.onSubmit}/>
	}
}