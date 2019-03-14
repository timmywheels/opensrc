import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import OpenSrcLogo from '../../img/logos/opensrc-logo-white.png';
import GitHubIcon from '../../img/github-icon.svg';
import * as github from "../views/api";

const HeaderSection = styled.header`
	height: 60px;
	color: #fff;
	z-index: 9999;
	position: sticky;
	width: 100%;
	top: 0;

	h3 {
		color: #333;
	}

	.closeButton {
		color: #999;
	}
	
	.header-btn{
		font-size: 12px;
        letter-spacing: 2px;
        font-weight: 400;
        margin-top: 12px;
	}
	
	.header-btn:hover{
		.loginBtnIcon{
			filter: invert(100%);
		}
	}
`;

const Logo = styled.img`
	width: 135px;
    margin: 8px 0 0 20px;
`;

const NavMenu = styled.ul`
	display: inline-block;
	float: right;
	margin-right: 50px;
	margin-top: 8px;

	@media (max-width: 500px) {
		display: none;
	}
`;

const LogoText = styled.p`
	text-decoration: none;
	color: #fff;
	font-size: 30px;
	float: left;
	line-height: 55px;
	margin-left: 30px;
	font-weight: 900;
`;

class Header extends Component {

    state = {
        githubId: null,
        userData: null,
        user: github.user,
        background: this.props.background || "transparent",
        borderBottom: 'none',
        boxShadow: 'none',
        marginBottom: this.props.marginBottom || "inherit",
    };

    listenScrollEvent = e => {
        if (window.scrollY > 350) {
            this.setState({
                background: '#00a1ff'
            });
        } else {
            this.setState({
                background: this.props.background || "transparent",
                borderBottom: 'none',
                boxShadow: 'none'
            });
        }
    };

    componentDidMount() {
        if (this.props.auth) {
            github.getAuthenticatedUserId()
                .then(data => {
                    this.setState({ githubId: data.githubId })
                })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.auth) {
            github.getAuthenticatedUserId()
                .then(res => {
                    this.setState({ githubId: res.githubId })
                })
        }

        if (this.state.githubId !== prevState.githubId) {
            github.fetchDataByUserId(this.state.githubId)
                .then(data => {
                    console.log('__DATA__', data)
                    this.setState({ userData: data }, () => {
                        this.props.setUserData(this.state.userData)
                    })
                }).catch(err => {
                console.log('__ERR__', err)
            })
        }
    }

    component

    shouldComponentUpdate(nextProps, nextState) {
        const didPropsAuthChange = this.props.auth !== nextProps.auth;
        const didGithubIdStateChange = this.state.githubId !== nextState.githubId;
        const didUserObjStateChange = this.state.user !== nextState.user;
        return didPropsAuthChange || didGithubIdStateChange || didUserObjStateChange;
    }

    renderContent() {
        switch (this.props.auth) {
            case null:
                return (
                    <li className={"align-middle"} style={{ display: "inline-block" }}>
                        <Link className={'header-btn btn btn-outline-light mt-2 mr-4'} to={"/auth/github"}>LOGIN<img
                            className={"loginBtnIcon"} style={{ height: "15px", width: "15px", margin: "0 0 3px 6px" }}
                            src={GitHubIcon}/></Link>
                    </li>
                );
            case false:
                return (
                    <li className={"align-middle"} style={{ display: "inline-block" }}>
                        <Link className={'header-btn btn btn-outline-light mt-2 mr-4'} to={"/auth/github"}>LOGIN<img
                            className={"loginBtnIcon"} style={{ height: "15px", width: "15px", margin: "0 0 3px 6px" }}
                            src={GitHubIcon}/></Link>
                    </li>
                );
            default:
                return [
                    <li className={"align-middle"} style={{ display: "inline-block" }} key={'1'}>
                        <Link className={'header-btn btn btn-outline-light mr-4'}
                              to={"/dashboard"}>{"DASHBOARD"}</Link>
                    </li>,
                    <li className={"align-middle"} style={{ display: "inline-block" }} key={'2'}>
                        <Link className={'header-btn btn btn-outline-light mr-4'} to={"/auth/logout"}>LOGOUT</Link>
                    </li>
                ];
        }
    }

    render() {
        // console.log('__THIS.PROPS.AUTH__', this.props.auth)
        return (
            <HeaderSection
                style={{
                    background: this.state.background,
                    borderBottom: this.state.borderBottom,
                    boxShadow: this.state.boxShadow,
                    marginBottom: this.state.marginBottom
                }}
            >
                <Link to={"/"}>
                    <Logo src={OpenSrcLogo} alt={"OpenSrc Logo"}/>
                </Link>
                <ul className={"float-right"} style={{ listStyle: "none" }}>{this.renderContent()}</ul>
                <NavMenu/>
            </HeaderSection>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
