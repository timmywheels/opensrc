import React, {Component} from 'react';
import View from './View';
import * as github from "../api"

export default class extends Component {

	state = {
		username: "",
		user: github.user,
		userData: {}
	};

	onChange = (username) => {
		this.setState({
			username
		});
	};

	setUserData = (userData) => {
		this.setState({
			userData
		})
		console.log('__USER DATA SET __')
	}

	onSubmit = () => {
		const {user, username} = this.state;
		this.setState({username}, () => {
			user.repos = []
			github.api(username);
			this.props.history.push(`/user/${username}`)
		})

	};

	render() {
		return <View {...this.props} {...this.state} setUserData={this.setUserData} username={this.state.username} user={github.user} onChange={this.onChange} onSubmit={this.onSubmit}/>
	}
}