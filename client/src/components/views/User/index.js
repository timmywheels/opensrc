import React, {Component} from "react";
import View from "./View";
import * as github from "../api";

export default class extends Component {
    state = {
        username: "",
        user: github.user,
        displayUserInfo: false,
        displayUserRepos: false,
        displayGitHubCalendar: false
    };

    componentDidMount() {
        const {username} = this.props.match.params;
        this.setState(
            {
                username,
                displayUserInfo: true,
                displayUserRepos: true,
                displayGitHubCalendar: true,
            }, github.api(username)
        );
    }

    setUserData = (userData) => {
        this.setState({
            userData
        })
        console.log('__USER DATA SET __')
    }

    onChange = username => {
        this.setState({username});
    };

    onSubmit = () => {
        const {user, username} = this.state;
        this.setState({username}, () => {
            user.repos = [];
            github.api(username);
            this.props.history.push(`/user/${username}`);
        });
    };

    render() {
        console.log("index.js Props:", this.props);
        console.log("index.js State:", this.state);
        return (
            <View
                {...this.props}
                {...this.state}
                setUserData={this.setUserData}
                user={github.user}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
            />
        );
    }
}
