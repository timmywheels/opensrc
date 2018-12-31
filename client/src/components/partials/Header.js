import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

const HeaderSection = styled.header`
	height: 60px;
	color: #fff;
	z-index: 9999;
	position: fixed;
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
	}
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
		background: 'transparent',
		borderBottom: 'none',
		boxShadow: 'none'
	};

	listenScrollEvent = e => {
		if (window.scrollY > 350) {
			this.setState({
				// borderBottom: '3px solid #0165f5',
				boxShadow: 'rgb(170, 170, 170) 0px 1px 5px',
				// boxShadow: '#0072ff 0px 0px 15px',
				background: '#00a1ff'
				// background: '-webkit-linear-gradient(to top,#0072ff,#00c6ff)',
				// background: 'linear-gradient(to top,#0072ff,#00c6ff)'
			});
		} else {
			this.setState({
				background: 'transparent',
				borderBottom: 'none',
				boxShadow: 'none'
			});
		}
	};

	componentDidMount() {
		window.addEventListener('scroll', this.listenScrollEvent);
	}

	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<Link className={'header-btn btn btn-success float-right mt-2 mr-4'} to={"/auth/github"}>LOGIN WITH GITHUB</Link>
					</li>
				);
			default:
				return [
					<li style={{display: "inline-block"}} key={'1'}>
						<Link className={'header-btn btn btn-outline-light float-right mt-2 mr-4'} to={"/account"}>ACCOUNT</Link>
					</li>,
					<li style={{display: "inline-block"}} key={'2'}>
						<Link className={'header-btn btn btn-success float-right mt-2 mr-4'} to={"/auth/logout"}>LOGOUT</Link>
					</li>,
				];
		}
	}

	render() {
		console.log("this.props.auth", this.props.auth);
		return (
			<HeaderSection
				style={{
					background: this.state.background,
					borderBottom: this.state.borderBottom,
					boxShadow: this.state.boxShadow
				}}
			>
				<Link to={this.props.auth ? "/account" : "/"}>
					<LogoText>opensrc</LogoText>
				</Link>
				<ul className="float-right" style={{listStyle: "none"}}>{this.renderContent()}</ul>
				<NavMenu/>
			</HeaderSection>
		);
	}
}

function mapStateToProps({auth}) {
	return {auth};
}

export default connect(mapStateToProps)(Header);
