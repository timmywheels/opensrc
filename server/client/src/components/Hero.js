import React, {Component} from 'react';
import styled from 'styled-components';
import Form from './Form';

const HeroSection = styled.div`
	background:url('https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f64af19374484d1e18a6e79a439cff9d&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb');
    min-height:50vh;
    background-size:cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    position: relative;
	text-align: center;
	
`;

const HeroOverlay = styled.div`
	background-color: rgba(100, 100, 100, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 50px;
    
    h1 {
        color: #fff;
    }
    
`;

class Hero extends Component {
	render () {
		return (
			<HeroSection>
				<HeroOverlay>
					<h1>Contribute to Something Great.</h1>
					<Form/>
				</HeroOverlay>
			</HeroSection>
		)
	}
}

export default Hero;