import React, { Component } from 'react';
import Header from '../../partials/Header';
import Hero from '../../partials/Hero';
import { connect } from 'react-redux';
import { fetchTrendingRepos } from '../../../actions/index';
import TrendingRepos from './TrendingRepos';

class Home extends Component {
	componentDidMount() {
		// this.props.fetchTrendingRepos();
	}

	render() {
		return (
			<div>
				<Header marginBottom={-60} setUserData={this.props.setUserData}/>
				<Hero {...this.props} {...this.state} user={this.props.user} onChange={this.props.onChange} onSubmit={this.props.onSubmit}/>
				<div className="container">
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
