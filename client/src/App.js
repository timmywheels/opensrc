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

	componentDidMount() {
		try{
			this.props.fetchTrendingRepos();
			this.props.fetchUser();
		} catch(err) {
			console.log("Error:", err)
		}
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
