import React, { Component } from 'react';
import MainContent from '../MainContent';
import Header from '../Header';
import Hero from '../Hero';
import * as api from '../../js/github-api';

class Home extends Component {
	componentDidMount() {
		const usernameForm = document.getElementById('usernameForm');
		usernameForm.addEventListener('click', e => {
			e.preventDefault();
			if (e.target.id === 'submitBtn') {
				// Reset user DOM items
				document.getElementById('latest-projects').innerHTML = '';
				let userBlog = document.getElementById('user-blog');
				let userLocation = document.getElementById('user-location');

				if (!userBlog) {
					userBlog.innerText = '';
				}

				if (!userLocation) {
					userLocation.innerText = '';
				}

				let username = document.getElementById('usernameInput').value;
				if (username) {
					api.requestUserData(username);
					api.requestUserRepos(username);
					// api.setRepoIssuesButtonColor();
				}
			}
		});
	}
	render() {
		return (
			<div>
				<Header />
				<Hero />
				<div className="container">
					<MainContent />
				</div>
			</div>
		);
	}
}

export default Home;
