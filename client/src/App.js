import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/views/Home';
import * as actions from './actions';
import User from "./components/views/User"

class App extends Component {
	componentDidMount() {
		this.props.fetchTrendingRepos();

	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path={'/'} component={Home} />
					<Route path={'/user/:username'} component={User} />
				</div>
			</BrowserRouter>
		);
	}
}

export default connect(
	null,
	actions
)(App);
