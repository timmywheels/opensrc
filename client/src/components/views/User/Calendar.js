import React, { Component } from 'react';
import 'github-calendar';
import styled from 'styled-components';

const GitHubCalendar = styled.div`
	display: none;
`;

class Calendar extends Component {
	render() {
		return (
			<GitHubCalendar id={'github-calendar'} className={'calendar'}>
				<img
					className="d-block mx-auto mt-4 js-activity-overview-graph-spinner"
					alt="Loading"
					src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif"
					width="32"
					height="32"
				/>
			</GitHubCalendar>
		);
	}
}

export default Calendar;
