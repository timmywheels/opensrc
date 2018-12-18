import React, { Component } from 'react';
import MainContent from '../MainContent';
import Header from '../Header';
import Hero from '../Hero';
import * as api from '../../js/github-api';
// import { connect } from 'react-redux';
// import { fetchTrendingRepos } from '../../actions';
import UserRepos from '../UserRepos';


let user = "";
let route = "";

class User extends Component {

	// componentDidMount() {
		// this.props.fetchTrendingRepos();
		// console.log('trending:',this.props.trending);
		// const usernameForm = document.getElementById('usernameForm');
		// usernameForm.addEventListener('click', e => {
		// 	e.preventDefault();
		// 	if (e.target.id === 'submitBtn') {
		// 		// Reset user DOM items
		// 		document.getElementById('latest-projects').innerHTML = '';
		// 		let userBlog = document.getElementById('user-blog');
		// 		let userLocation = document.getElementById('user-location');
		//
		// 		if (!userBlog) {
		// 			userBlog.innerText = '';
		// 		}
		//
		// 		if (!userLocation) {
		// 			userLocation.innerText = '';
		// 		}
		//
		// 		let username = document.getElementById('usernameInput').value;
		// 		if (username) {
		// 			api.requestUserData(username);
		// 			api.requestUserRepos(username);
		// 			api.getRepoIssuesButtons();
		// 		}
		// 	}
		// });
	// }


	// constructor(props) {
	// 	super(props);
	//
	// 	this.state = {
	// 		username: "timwheelercom"
	// 	}
	//
	// 	this.handleUser = this.handleUser.bind(this)
	// 	// let { user } = this.props;
	// }
	state = {
		username: null
	}

	handleUser = () => {
		user = this.props.match.params;
		this.setState({username: user})
		console.log("GITHUB:", user)
		route = `/user/${user}`;
		console.log("STATE FROM USER.JS:", this.state)
		console.log("PARAMS", this.props.match.params)
	}

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

// function mapStateToProps({ trending }) {
// 	return { trending };
// }
//
// export default connect(
// 	mapStateToProps,
// 	{ fetchTrendingRepos }
// )(User);
