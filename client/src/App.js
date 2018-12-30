import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/views/Home/';
import * as actions from './actions';
import User from "./components/views/User/"
import Login from "./components/views/Login/"

class App extends Component {
	componentDidMount() {
		// console.log("App.js Props:", this.props);
		try{
			this.props.fetchUser();
			this.props.fetchTrendingRepos();
		} catch(err) {
			console.log("Errorz:", err)
		}
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path={'/'} component={Home} />
					<Route path={'/auth/github'} component={Login} />
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
