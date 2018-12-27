import React, {Component} from 'react';
import View from './View';
import * as github from '../api';

export default class extends Component {

	state = {
		username: "",
		displayUserInfo: false,
		displayUserRepos: false
	};

	componentDidMount() {
		this.setState({
			username: this.props.match.params.username,
			displayUserInfo: true,
			displayUserRepos: true
		}, github.api(this.state.username));
		// const { username } = this.props.match.params/
		console.log("yo yo yo:", this.props.match.params.username)
	}

	onChange = (username) => {
		this.setState({username});
	};

	onSubmit = async (callback) => {
		let {username} = this.state;
		await github.api(username);
		// this.props.history.push(`/user/${username}`);
		await callback;
	};

	render() {
		console.log("index.js Props:", this.props);
		console.log("index.js State:", this.state);
		return (
			<View {...this.props} {...this.state} user={github.user} onChange={this.onChange} onSubmit={this.onSubmit}/>
		)
	}
}