import React, { Component } from 'react';
import View from './View';
import * as github from "../api";

class Dashboard extends Component {

    state = {
        username: null,
        user: github.user,
        githubId: null,
        userData: {}
    };

    setGitHubId = (githubId) => {
        this.setState({
	        githubId
        })
        console.log("Github ID set!", this.state)
    }

    setUserData = (userData) => {
        this.setState({
            userData
        })
        console.log('__USER DATA SET __')
    }

    onChange = (username) => {
        this.setState({
            username
        });
        console.log("Dashboard/index.js State:", this.state)
    };

    onSubmit = () => {
        const {user, username} = this.state;
        this.setState({username}, () => {
            user.repos = [];
            github.api(username);
            this.props.history.push(`/user/${username}`)
        })
    };

    render(){
        // console.log("Dashboard/index.js Props:", this.props);
        return <View {...this.props} {...this.state} username={this.state.username} setGitHubId={this.setGitHubId} setUserData={this.setUserData} user={github.user} onChange={this.onChange} onSubmit={this.onSubmit}/>
    }
};

export default Dashboard