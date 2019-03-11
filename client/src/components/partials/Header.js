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
        background: this.props.background || "transparent",
        borderBottom: 'none',
        boxShadow: 'none',
        marginBottom: this.props.marginBottom || "inherit",
        userData: ''
    };

    listenScrollEvent = e => {
        if (window.scrollY > 350) {
            this.setState({
                // boxShadow: 'rgb(170, 170, 170) 0px 1px 5px',
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
        console.log("Header.js Props:", this.props)
        window.addEventListener('scroll', this.listenScrollEvent);

        if (this.state.githubId) {
            console.log('___YEEET___')

        } else {
            console.log("___NO STATE FOR YOU___")
        }

    }

    //////
    //// TODO: Get logged in github user's data to populate into dashboard
    //////

    componentWillMount() {
        if (this.props.auth) {
            const { githubId } = this.props.auth;
            const userData = github.fetchDataByUserId(githubId)
            userData.then(res => {
                console.log('res::::::', res)
                return res;
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('prvProps', prevProps)
        // console.log('this.props', this.props)
        const { githubId } = this.props.auth;
        this.setState({ githubId });

        github.fetchDataByUserId(githubId)
            .then(res => {
                console.log('__RES__', res)
                this.setState({ userData: res })
            }).catch(err => {
                console.log('__ERR__', err)
        })
    }

    shouldComponentUpdate(nextProps, nextState) {

        const didPropsAuthChange = this.props.auth !== nextProps.auth;
        const didGithubIdStateChange = this.state.githubId !== nextState.githubId;

        console.log('__DID PROPS CHANGE__', didPropsAuthChange)
        console.log('__DID STATE CHANGE__', didGithubIdStateChange)

        return didPropsAuthChange || didGithubIdStateChange;
    }

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
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
