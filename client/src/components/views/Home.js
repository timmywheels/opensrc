import React, { Component } from 'react';
import MainContent from '../MainContent';
import Header from '../Header';
import Hero from '../Hero';
import * as api from '../../js/github-api';
import { connect } from 'react-redux';
import { fetchTrendingRepos } from '../../actions';
import TrendingRepos from '../TrendingRepos';

class Home extends Component {
	componentDidMount() {
		this.props.fetchTrendingRepos();
		// console.log('trending:',this.props.trending);
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

	// renderTrendingRepos() {
	// 	return this.props.trending.map(repo => {
	// 		return (
	// 			<div class="col-lg-3 col-md-4 col-sm-6 card-block">
	// 				<div class="card">
	// 					<div class="card-body d-flex flex-column">
	// 						<div class="row">
	// 							<a
	// 								class="repo-link col-12"
	// 								href="https://github.com/timwheelercom/agile-week/"
	// 								target="_blank"
	// 							>
	// 								<h5 class="card-title">{repo.repoName}</h5>
	// 							</a>
	// 							{/*<p class="fork-link col-4"><img src="/static/media/github-fork.3421d08d.svg" alt="GitHub Fork Icon">3</p>*/}
	// 						</div>
	// 						<p class="card-text">{repo.repoDesc}</p>
	// 						{/*<img class="language-img" src="/static/media/html5.4b55d3c2.svg">*/}
	// 						{/*<a class="btn issues mt-auto" target="_blank" href="https://github.com/timwheelercom/agile-week/issues">0 Open Issues</a>*/}
	// 						<a className="btn issues mt-auto" target="_blank" href="#">
	// 							{repo.starCount}
	// 						</a>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		);
	// 	});
	// }

	render() {
		return (
			<div>
				<Header />
				<Hero />
				<div className="container">
					<MainContent />
					<TrendingRepos />
				</div>
			</div>
		);
	}
}

function mapStateToProps({ trending }) {
	return { trending };
}

export default connect(
	mapStateToProps,
	{ fetchTrendingRepos }
)(Home);
