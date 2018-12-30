import React, { Component } from 'react';
import MainContent from './MainContent';
import Header from '../../partials/Header';
import Hero from '../../partials/Hero';
import * as api from '../../../js/github-api';
import { connect } from 'react-redux';
import { fetchTrendingRepos } from '../../../actions/index';
import TrendingRepos from '../Home/TrendingRepos';
import UserData from '../User/index'

class Home extends Component {
	componentDidMount() {
		this.props.fetchTrendingRepos();
	}


	render() {
		return (
			<div>
				<Header />
				<Hero />
				<div className="container">
					{/*<h3>{UserData}</h3>*/}
					<UserData/>
					{/*<MainContent />*/}
					{/*<TrendingRepos />*/}
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
