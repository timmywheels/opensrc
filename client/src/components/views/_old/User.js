import React, { Component } from 'react';
import MainContent from '../../MainContent';
import Header from '../../Header';
import Hero from '../../Hero';
import * as api from '../../../js/github-api';
import UserRepos from '../../UserRepos';
import UserData from '../User/index'


let user = "";
let route = "";

class User extends Component {

	state = {
		username: null
	};

	handleUser = (e) => {
		console.log("e:", e)
		user = this.props.match.params;
		this.setState({username: user});
		console.log("GITHUB:", user);
		route = `/user/${user}`;
		console.log("STATE FROM USER.JS:", this.state);
		console.log("PARAMS", this.props.match.params)
	};

	render() {

		return (
			<div>
				<Header />
				<Hero user={user} onChange={this.handleUser} onSubmit={this.handleUser} action={route}/>
				<div className="container">
					<MainContent />
					<UserRepos user={user}/>
				</div>
			</div>
		);
	}
}

export default User;
