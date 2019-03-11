import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/views/Home/';
import * as actions from './actions';
import User from "./components/views/User/"
// import Login from "./components/views/Login/";
import Dashboard from "./components/views/Dashboard"
import * as api from "./components/views/api";

class App extends Component {

	state = {
		githubId: null
	}

	componentDidMount() {
		// console.log("App.js Props:", this.props);
		try{
			api.getAuthenticatedUsername();
			console.log("App.js STATE:", this.state);
			console.log("App.js Props:", this.props);
			this.props.fetchTrendingRepos();
			this.props.fetchUser();
		} catch(err) {
			console.log("Error:", err)
		}
	}

	shouldComponentUpdate(nextProps) {
		const authToken = this.props.auth !== nextProps.auth;
		console.log('UPDATE STATE', this.state)
		return authToken;
	}

	render() {
		return (
			<BrowserRouter>
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
