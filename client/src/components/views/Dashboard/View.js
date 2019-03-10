import React, {Component} from 'react';
import styled from 'styled-components'
import Header from '../../partials/Header'
import Hero from '../../partials/Hero';
import Sidebar from '../../partials/Sidebar';
import DashPanel from '../../views/Dashboard/DashPanel';
import {getAuthenticatedUsername} from "../api";


// const DashboardSection = styled.div`
//   min-height: 100vh;
// `;

class View extends Component {

	render() {
		const username = getAuthenticatedUsername();
		username.then((data) => { console.log(data, 'hhh'); return data });


		console.log("Dashboard/View.js Props:", this.props)
		return (
			<div>
				<Header background={"#26b0f5"} setGitHubId={this.props.setGitHubId}/>
				<div className="container px-lg-5">
					<div className="row justify-content-center">

						<Sidebar username={""} repos={this.props.user.repos}/>
						<DashPanel/>
					</div>
				</div>
			</div>
		)
	}
}

export default View;