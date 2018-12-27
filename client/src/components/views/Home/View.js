import React, { Component } from 'react';
import Header from '../../Header';
import Hero from '../../Hero';
import { connect } from 'react-redux';
import { fetchTrendingRepos } from '../../../actions/index';
import TrendingRepos from '../../TrendingRepos';

class Home extends Component {
	componentDidMount() {
		this.props.fetchTrendingRepos();
	}


	render() {
		console.log("Home/View.js Props:", this.props)
		// console.log("Home/View.js Props.User:", this.props.username)

		return (
			<div>
				<Header />
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
