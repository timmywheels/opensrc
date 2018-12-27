import React, { Component } from 'react';
import UserInfo from '../User/UserInfo';
import LanguageCounts from '../../LanguageCounts';

class MainContent extends Component {
	render() {
		return (
			<div>
				<UserInfo />
				<div className="col-md-12">
					<div className={'row'} id="latest-projects" />
				</div>
			</div>
		);
	}
}

export default MainContent;
