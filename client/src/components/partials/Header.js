import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import OpenSrcLogo from '../../img/logos/opensrc-logo-white.png';
import GitHubIcon from '../../img/github-icon.svg';
import * as github from "../views/api";

let githubUsername = "";

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
    };

    listenScrollEvent = e => {
        if (window.scrollY > 350) {
            this.setState({
                boxShadow: 'rgb(170, 170, 170) 0px 1px 5px',
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
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevProps.auth !== this.props.auth) {
    //         github.fetchDataByUserId(this.props.auth.githubId);
    //     }
    // }
    //
    // shouldComponentUpdate(nextProps) {
    //     const didPropsAuthChange = this.props.auth !== nextProps.auth
    //     return didPropsAuthChange;
    // }

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li className={"align-middle"} style={{display: "inline-block"}}>
                        <Link className={'header-btn btn btn-outline-light mt-2 mr-4'} to={"/auth/github"}>LOGIN<img
                            className={"loginBtnIcon"} style={{height: "15px", width: "15px", margin: "0 0 3px 6px"}}
                            src={GitHubIcon}/></Link>
                    </li>
                );
            default:
                return [
                    <li className={"align-middle"} style={{display: "inline-block"}} key={'1'}>
                        <Link className={'header-btn btn btn-outline-light mr-4'}
                              to={"/dashboard"}>{githubUsername || "DASHBOARD"}</Link>
                    </li>,
                    <li className={"align-middle"} style={{display: "inline-block"}} key={'2'}>
                        <Link className={'header-btn btn btn-outline-light mr-4'} to={"/auth/logout"}>LOGOUT</Link>
                    </li>
                ];
        }
    }

    render() {
        console.log("this.props.auth", this.props.auth)
        if (this.props.auth) {
            this.state.userData = github.fetchDataByUserId(this.props.auth.githubId)
            console.log("___THAT STATE___", this.state)
        }

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
                <ul className={"float-right"} style={{listStyle: "none"}}>{this.renderContent()}</ul>
                <NavMenu/>
            </HeaderSection>
        );
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Header);
