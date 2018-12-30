import React, { Component } from 'react';
import GitHubCalendar from 'github-calendar';
import styled from 'styled-components';

// const GitHubCalendar = styled.div`
// 	display: block;
// `;

class Calendar extends Component {
	componentDidMount(){
        GitHubCalendar(".calendar", this.props.username);
	}
    // componentWillReceiveProps(){
    //     GitHubCalendar(".calendar", this.props.username);
    // }

	render() {
        console.log("Calendar.js Props:", this.props);
        if (!this.props.displayGitHubCalendar) {
            return;
        } else {
            return (
                <div id={'github-calendar'} className={'calendar'}>
                    <img
                        className="d-block mx-auto mt-4 js-activity-overview-graph-spinner"
                        alt="Loading"
                        src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif"
                        width="32"
                        height="32"
                    />
                </div>
            );
        }
    }
}

export default Calendar;