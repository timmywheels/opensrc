import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/views/Home/';
import * as actions from './actions';
import User from "./components/views/User/"
// import Login from "./components/views/Login/";
import Account from "./components/views/Account"

class App extends Component {
	componentDidMount() {
		// console.log("App.js Props:", this.props);
		try{
			console.log("App.js Props:", this.props);
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
					<Route exact path={'/account'} component={Account} />
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
