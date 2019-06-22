import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/views/Home/';
import * as actions from './actions';
import User from "./components/views/User/"
import Dashboard from "./components/views/Dashboard"

class App extends Component {

	componentDidMount() {

		const code =
			window.location.href.match(/\?code=(.*)/) &&
			window.location.href.match(/\?code=(.*)/)[1];
		console.log("CODE:", code);

		try{
		    console.log('__APP.JS__', this.props);
			this.props.fetchUser();
			this.props.fetchTrendingRepos();
		} catch(err) {
			console.log("Error:", err)
		}
	}

	render() {
		return (
			<BrowserRouter basename={'/'}>
				<div>
					<Route exact path={'/'} component={Home} />
					<Route exact path={'/dashboard'} component={Dashboard} />
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
