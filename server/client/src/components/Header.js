import React, { Component } from 'react';
import logo from '../img/opensrc-logo-001.png';
// import '../css/App.css';
import styled from 'styled-components';
// import ContactModal from './ContactModal';

const HeaderSection = styled.header`
  background-color: #007bff;
	border-bottom: 3px solid #0069da;
	height: 60px;
	color: #fff;
	box-shadow: 0 0 20px #252525;
	z-index: 9999;
	position: sticky;
	width: 100%;
	top: 0;
	
	h3{
	  color: #333;
	}
	
	.closeButton{
	  color: #333;
	}
	
`;

const HeaderLogo = styled.img`
    height: 55px;
    padding: 5px 20px;
    opacity: 1.0;
    transition: opacity 0.5s ease-in-out;
    
    &:hover {
        opacity: 0.65;
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
            background-color: #fff;
            color: #007bff;
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

const MobileNavMenu = styled.ul`
  
  background: #c8102e;
  opacity: 0.95
  color: #fff;
  margin-top: -1px;
  padding: 20px !important;
  text-align: center;
`;

const MobileNavMenuItem = styled.ul`
    
    padding: 5px 10px 5px 10px;
    display: block;
    font-size: 18px;
    
        &#contact-cta{
          background-color: #fff;
	        color: #333;
	        padding: 5px 20px;
          transition: opacity 0.3s ease-in-out;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        &#contact-cta:hover{
            opacity: 0.85;
        }
`;

const MobileNavMenuToggle = styled.i`
  float: right;
  cursor: pointer;
  display: none !important;
  line-height: 1.9 !important;
  font-size: 30px !important;
  padding-right: 20px;
  
  @media (max-width: 500px) {
	    display: block !important;
	    
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
	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		showMobileMenu: false,
	// 		showModal: false
	// 	}
	// }
	// toggleMobileMenu() {
	// 	this.setState({
	// 		showMobileMenu: !this.state.showMobileMenu
	// 	});
	// }
	//
	// toggleModal() {
	// 	this.setState({
	// 		showModal: !this.state.showModal
	// 	});
	// }


	render() {
		return (
			<HeaderSection>
			<a href={'/'}>
				<LogoText>opensrc</LogoText>
			{/*<HeaderLogo src={logo} alt='logo' />*/}
			</a>
			<NavMenu>
			{/*<a href="/about"><NavMenuItem>About</NavMenuItem></a>*/}
		{/*<a href="/projects"><NavMenuItem>Projects</NavMenuItem></a>*/}
		<a href={'#'}><NavMenuItem id={'contact-cta'}>Discover</NavMenuItem></a>
		</NavMenu>
		{/*<MobileNavMenuToggle onClick={this.toggleMobileMenu.bind(this)} className={'material-icons'}>menu</MobileNavMenuToggle>*/}
		{/*/!* MOBILE MENU *!/*/}
		{/*{this.state.showMobileMenu ?*/}
		{/*<MobileNavMenu>*/}
		{/*<a href="/about"><MobileNavMenuItem>About</MobileNavMenuItem></a>*/}
		{/*<a href="/projects"><MobileNavMenuItem>Projects</MobileNavMenuItem></a>*/}
		{/*<a onClick={this.toggleModal.bind(this)}><NavMenuItem id={'contact-cta'}>Let's Chat</NavMenuItem></a>*/}
		{/*</MobileNavMenu>*/}
		{/*:null*/}
		{/*}*/}
		{/*/!* CONTACT MODAL*!/*/}
		{/*{this.state.showModal ?*/}
		{/*/!*<ContactModal*!/*/}
			{/*/!*title={'Reach Out'}*!/*/}
			{/*/!*closeModal={this.toggleModal.bind(this)}*!/*/}
			{/*/>*/}
		{/*:null*/}
		{/*}*/}
	</HeaderSection>
	);
	}
}

export default Header;