import React, { Component } from 'react';
import MainContent from '../MainContent';
import Header from '../Header';
import Hero from '../Hero';
import * as api from '../../js/github-api';
import { connect } from 'react-redux';
import { fetchTrendingRepos } from '../../actions';

class Home extends Component {
	componentDidMount() {
		this.props.fetchTrendingRepos();
		console.log('trending:',this.props.trending);
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
					api.getRepoIssuesButtons();
				}
			}
		});
	}


	renderTrendingRepos() {
		return this.props.trending.map(repo => {
			return (
				<div className={'card darken-1'} key={repo._id}>
					<div>{repo.repoName}</div>
					<div>{repo.repoDesc}</div>
					<div>{repo.starCount}</div>
				</div>
			);
		});
	}


	render() {
		return (
			<div>
				<Header />
				<Hero />
				<div className="container">
					<MainContent />
					<div>test</div>
					<ul>
						<li>{this.renderTrendingRepos()}</li>
					</ul>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ trending }) {
	return { trending }
}

export default connect(
	mapStateToProps,
	{ fetchTrendingRepos }
)(Home);