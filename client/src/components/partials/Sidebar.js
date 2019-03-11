import React, {Component} from 'react';
import styled from 'styled-components'
import DashPanel from "../views/Dashboard/DashPanel"

const SidebarSection = styled.div`
	min-height: 80vh;
	background: #fff;
	-webkit-box-shadow: 2px 2px 15px 0 #33333333;
  box-shadow: 2px 2px 15px 0 #33333333;
  border-radius: .25rem;
  border: 2px solid #ddd;
`;


class Sidebar extends Component {

	render() {
		console.log("Sidebar.js Props:", this.props)
		return (
				<SidebarSection className="col-md-3 mt-5">
					<p className={"text-center pt-3"}>Sidebar</p>
					<h4 className={"text-center pt-4 pb-2 font-weight-bold"}>{this.props.username}</h4>
					<h6 className={"text-center pt-2 pb-2 font-weight-bold"}>Latest Projects</h6>
					<ul className={"list-group"}>
						{
							this.props.repos.map(repo => {
								console.log("Sidebar=>repo:",repo)
								return <li className={"list-group-item"}>{repo.repoName}</li>
							})
						}
					</ul>
					<div>
						<h6><a href={"#"}>Home</a></h6>
						<h6><a href={"#"}>Settings</a></h6>
						<h6><a href={"#"}>Account</a></h6>
					</div>


				</SidebarSection>
		)
	}
}

export default Sidebar;