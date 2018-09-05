import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderSection = styled.header`
	height: 60px;
	color: #fff;
	z-index: 9999;
	position: fixed;
	width: 100%;
	top: 0;
	
	h3{
	  color: #333;
	}
	
	.closeButton{
	  color: #999;
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
		if (window.scrollY > 100) {
			this.setState({
				borderBottom: '3px solid #0165f5',
				boxShadow: '0 0 20px #252525',
                background: '#00c6ff',
                background: '-webkit-linear-gradient(to top,#0072ff,#00c6ff)',
                background: 'linear-gradient(to top,#0072ff,#00c6ff)'
			})
		} else {
			this.setState({
				background: 'transparent',
				borderBottom: 'none',
				boxShadow: 'none'
			})
		}
	};

	componentDidMount() {
		window.addEventListener('scroll', this.listenScrollEvent)
	}

	render() {
		return (
			<HeaderSection style={{background: this.state.background, borderBottom: this.state.borderBottom}}>
			<a href={'/'}>
				<LogoText>opensrc</LogoText>
			</a>
			<NavMenu>
		</NavMenu>
	</HeaderSection>
	);
	}
}

export default Header;