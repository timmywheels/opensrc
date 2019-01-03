import React, {Component} from 'react';
import styled from 'styled-components'
import Header from '../../partials/Header'
import Hero from '../../partials/Hero';
import Sidebar from '../../partials/Sidebar';


const DashboardSection = styled.div`
  min-height: 100vh;
`;

class View extends Component {
	render() {
		console.log("Dashboard/View.js Props:", this.props)
		return (
			<div>
				<Header background={"#26b0f5"} setGitHubId={this.props.setGitHubId}/>
				<Sidebar/>
				<DashboardSection>
					{/*<Hero/>*/}
					<div className="container">

						<h1 className={"text-center mt-5"}>Dashboard</h1>
					</div>
				</DashboardSection>
			</div>
		)
	}
}

export default View;