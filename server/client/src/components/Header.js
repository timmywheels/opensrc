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

const NavMenuItem = styled.li`
    padding: 5px 10px 5px 10px;
    display: inline-block;
    font-size: 18px;
    
        &#contact-cta{
            border-radius: 4px;
            background-color: #fff;
            color: #333;
            padding: 5px 20px;
            transition: opacity 0.3s ease-in-out;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-left: 10px;
        }
        &#contact-cta:hover{
            opacity: 0.85;
        }
        
        
        
     
`;

const LogoText = styled.p`
	text-decoration: none;
	color: #fff;
	font-size: 30px;
	float: left;
	line-height: 55px;
    margin-left: 30px;
`;


class Header extends Component {

	state = {
		backgroundColor: 'transparent',
		borderBottom: 'none',
		boxShadow: 'none'
	};

	listenScrollEvent = e => {
		if (window.scrollY > 100) {
			this.setState({
				backgroundColor: '#007bff',
				borderBottom: '3px solid #0165f5',
				boxShadow: '0 0 20px #252525'
			})
		} else {
			this.setState({
				backgroundColor: 'transparent',
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
			<HeaderSection style={{backgroundColor: this.state.backgroundColor}}>
			<a href={'/'}>
				<LogoText>opensrc</LogoText>
			</a>
			<NavMenu>
		<a href={'#'}><NavMenuItem id={'contact-cta'}>Discover</NavMenuItem></a>
		</NavMenu>
	</HeaderSection>
	);
	}
}

export default Header;