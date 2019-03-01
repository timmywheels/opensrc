import React, { Component } from 'react';
import View from './View';
import * as github from "../api";

class Dashboard extends Component {

    state = {
        username: "",
        user: github.user,
        githubId: ""
    };

  // using with no wifi on the plane
	// state = {
	// 	username: "timwheelercom",
	// 	user: {
	// 	    login: "timwheelercom",
  //       repos: [
  //       	{"repoName": "algorithm-practice"},
	//         {"repoName": "java"},
	//         {"repoName": "c-sharp"}
  //       ],
	// 			type: "user"
  //   },
	// 	githubId: "1234567890"
	// };


    setGitHubId = (githubId) => {
        this.setState({
	        githubId
        }, console.log("Github ID set!", this.state))

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

    componentDidMount(){
	    // const githubUsername = github.getAuthenticatedUsername(this.props.githubId)
    }

    render(){
        // const githubUsername = github.getAuthenticatedUsername(this.props.githubId)
        console.log("Dashboard/index.js Props:", this.props);
	      // console.log("githubUsername:", githubUsername);
        return <View {...this.props} {...this.state} username={this.state.username} setGitHubId={this.setGitHubId} user={github.user} onChange={this.onChange} onSubmit={this.onSubmit}/>

	    // using on the plane
	    // return <View {...this.props} {...this.state} username={this.state.username} setGitHubId={this.setGitHubId} user={this.state.user} onChange={this.onChange} onSubmit={this.onSubmit}/>

    }
};

export default Dashboard