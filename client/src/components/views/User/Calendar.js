import React, { Component } from 'react';
import GitHubCalendar from 'github-calendar';
import OctoCatSpinner from '../../../img/octicons/octocat-spinner-128-dark.gif';

class Calendar extends Component {

	componentDidMount(){
	    // const isOrganization = this.props.user.type === 'Organization';
	    // console.log('isOrganization:',isOrganization)
	    // // isOrganization ? this.props.hideGitHubCalendarForOrganizations() : "";
        // if (isOrganization) {
        //     // this.handleCalendar();
        // }

        GitHubCalendar(".calendar", this.props.username, { responsive: true })
            .catch(err => {
                console.log(err);
        });
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
        const isOrganization = this.props.user.type === 'Organization';
        console.log('isOrganization:',isOrganization)
        // isOrganization ? this.props.hideGitHubCalendarForOrganizations() : "";
        if (isOrganization) {
            this.hideGitHubCalendar();
        }
	    if (prevProps.searchQueryCount !== this.props.searchQueryCount) {
            GitHubCalendar(".calendar", this.props.username, { responsive: true })
                .catch(err => {
                    console.log(err);
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const didSearchQueryCountChange = this.props.searchQueryCount !== nextProps.searchQueryCount;
        return didSearchQueryCountChange;
    }

    render() {

        console.log("Calendar.js Props:", this.props);
        if (!this.props.displayGitHubCalendar || this.props.user.type === "Organization") {
            return("");
        } else {
            return (
                <div id={'github-calendar'} className={'calendar'}>
                    <img
                        className="d-block mx-auto mt-4 js-activity-overview-graph-spinner"
                        alt="Loading"
                        src={OctoCatSpinner}
                        width="32"
                        height="32"
                    />
                </div>
            );
        }
    }
}

export default Calendar;
