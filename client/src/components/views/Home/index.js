import React, {Component} from 'react';
import View from './View';
import * as github from "../api"

export default class extends Component {

	state = {
		username: "",
		user: github.user
	};

	onChange = (username) => {
		this.setState({
			username
		});
	};

	onSubmit = () => {
		const {user, username} = this.state;
		this.setState({username}, () => {
			user.repos = []
			github.api(username);
			this.props.history.push(`/user/${username}`)
		})

	};

	render() {
		return <View {...this.props} {...this.state} username={this.state.username} user={github.user} onChange={this.onChange} onSubmit={this.onSubmit}/>
	}
}