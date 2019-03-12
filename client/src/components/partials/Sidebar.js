import React, {Component} from 'react';
import styled from 'styled-components'
import OcticonLinkIcon from '../../img/octicons/link.svg'
import DashPanel from "../views/Dashboard/DashPanel"
import Dashboard from "../views/Dashboard";

const SidebarSection = styled.div`
	min-height: 80vh;
	background: #fff;
	-webkit-box-shadow: 2px 2px 15px 0 #33333333;
	  box-shadow: 2px 2px 15px 0 #33333333;
	  border-radius: .25rem;
	  border: 2px solid #ddd;
`;

const DashboardText = styled.p`
    text-align: center;
    margin: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 10px;
    font-weight: 900;
`;

const UserAvatar = styled.img`
    width: 100px;
    height: auto;
    border-radius: 50px;
    margin: 20px auto;
    display: block;
    box-shadow: 2px 2px 20px #33333355;
    border: 3px solid #fff;
`;



class Sidebar extends Component {

    renderSidebarContent() {
        switch(this.props.userData) {
            case null:
                return (
                    <div></div>
                )
            case false:
                return;
            default:
                    return [
                        <div><UserAvatar src={this.props.userData.avatar_url} alt={`${this.props.userData.login}'s avatar`}/></div>,
                        <DashboardText>{this.props.userData.login}</DashboardText>,
                        <DashboardText>{this.props.userData.location}</DashboardText>,
                        <DashboardText><a style={{"color": '#333'}} target={"_blank"} href={this.props.userData.blog}> Blog <img style={{marginBottom: 4}} height={10} src={OcticonLinkIcon}/></a></DashboardText>,
                        <hr/>,
                        <DashboardText>Followers</DashboardText>,
                        <DashboardText>{this.props.userData.followers}</DashboardText>,
                        <hr/>,
                        <DashboardText>Public Repos</DashboardText>,
                        <DashboardText>{this.props.userData.public_repos}</DashboardText>
                    ]
        }
    }

    render() {
        console.log("Sidebar.js Props:", this.props)
        return (
            <SidebarSection className="col-md-3 mt-5">
                <DashboardText>Dashboard</DashboardText>
                <div>
                    {this.renderSidebarContent()}
                </div>
                {/*<h6 className={"text-center pt-2 pb-2 font-weight-bold"}>Latest Projects</h6>*/}
                {/*<ul className={"list-group"}>*/}
                    {/*{*/}
                        {/*this.props.repos.map(repo => {*/}
                            {/*console.log("Sidebar=>repo:", repo)*/}
                            {/*return <li className={"list-group-item"}>{repo.repoName}</li>*/}
                        {/*})*/}
                    {/*}*/}
                {/*</ul>*/}
                {/*<div>*/}
                    {/*<h6><a href={"#"}>Home</a></h6>*/}
                    {/*<h6><a href={"#"}>Settings</a></h6>*/}
                    {/*<h6><a href={"#"}>Account</a></h6>*/}
                {/*</div>*/}


            </SidebarSection>
        )
    }
}

export default Sidebar;