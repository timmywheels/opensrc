import React, { Component } from 'react';
import styled from 'styled-components'
import OctoCatSpinner from '../../img/octicons/octocat-spinner-128-dark.gif';
import OcticonLinkIcon from '../../img/octicons/link.svg';
import GitHubLogo from '../../img/octicons/mark-github.svg';

const SidebarSection = styled.div`
	min-height: 80vh;
	background: #fff;
	-webkit-box-shadow: 2px 2px 15px 0 #33333333;
	  box-shadow: 2px 2px 15px 0 #33333333;
	  border-radius: .25rem;
`;

const Loader = styled.img`
    vertical-align: middle;
    border-style: none;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 32px;
    width: auto;
    filter: invert(80%);
`
const GitHubLogoElement = styled.img`
    margin: 50px auto;
    display: block;
    height: 30px;
    width: auto;
    filter: invert(25%);
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
    transition: box-shadow 0.25s ease-in-out;
    
    &:hover{
        box-shadow: 1px 1px 5px #33333355;
        transition: box-shadow 0.25s ease-in-out;
    }
    
`;


class Sidebar extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const didPropsUserDataChange = this.props.userData !== nextProps.userData;
        return didPropsUserDataChange;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.renderSidebarContent();
    }

    renderSidebarContent() {
        switch (this.props.userData.login) {
            case undefined:
                return (
                    <div>
                        <Loader src={ OctoCatSpinner } alt={ 'Octocat Spinner' }/>
                    </div>
                )
            default:
                return [
                    <div>
                        <UserAvatar src={ this.props.userData.avatar_url }
                                    alt={ `${ this.props.userData.login }'s avatar` }/>
                    </div>,
                    <DashboardText>{ this.props.userData.login }</DashboardText>,
                    <DashboardText>{ this.props.userData.location }</DashboardText>,
                    <DashboardText>
                        <a style={ { "color": '#333' } } target={ "_blank" }
                           href={ this.props.userData.blog }> Blog
                            <img alt={'Blog Icon'} style={ { marginBottom: 4 } }
                                 height={ 10 }
                                 src={ OcticonLinkIcon }/>
                        </a>
                    </DashboardText>,
                    <DashboardText>{ this.props.userData.company }</DashboardText>,
                    <hr/>,
                    <DashboardText>Followers</DashboardText>,
                    <DashboardText>{ this.props.userData.followers }</DashboardText>,
                    <hr/>,
                    <DashboardText>Public Repos</DashboardText>,
                    <DashboardText>{ this.props.userData.public_repos }</DashboardText>,
                    <div>
                        <a href={ this.props.userData.html_url } target={ '_blank' }>
                            <GitHubLogoElement src={ GitHubLogo } alt={ 'GitHub Logo' }/>
                        </a>
                    </div>
                ].map((element, index) => {
                    return (
                        <div key={ index.toString() }>
                            { element }
                        </div>
                    )
                })
        }
    }

    render() {
        console.log("Sidebar.js Props:", this.props)
        return (
            <div className={ 'col-md-4 mt-5' }>
                <SidebarSection className="col-md-12 pt-2">
                    <div>
                        { this.renderSidebarContent() }
                    </div>
                </SidebarSection>
            </div>
        )
    }
}

export default Sidebar;