import React, {Component} from "react";
import View from "./View";
import * as github from "../api";

export default class extends Component {
    state = {
        username: null,
        user: github.user,
        displayUserInfo: false,
        displayUserRepos: false,
        displayGitHubCalendar: false,
        searchQueryCount: 1
    };

    componentWillMount() {
        const { username } = this.props.match.params;
        this.setState(
            {
                username,
                displayUserInfo: true,
                displayUserRepos: true,
                displayGitHubCalendar: true,
            }, () => {
                github.api(username)
            }
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.render();
    }

    hideGitHubCalendarForOrganizations = () => {
        this.setState({ displayGitHubCalendar: false })
    }

    setUserData = (userData) => {
        this.setState({
            userData
        })
        console.log('__USER DATA SET __')
    }

    onChange = username => {
        this.setState({ username });
    };

    onSubmit = () => {
        let { user, username, searchQueryCount } = this.state;
        this.setState({ username, searchQueryCount: ++searchQueryCount }, () => {
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
                handleCalendar={this.hideGitHubCalendarForOrganizations}
                setUserData={this.setUserData}
                user={github.user}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
            />
        );
    }
}
