import React, {Component} from 'react';
import styled from 'styled-components';
import Form from './Form';

const HeroSection = styled.div`
	background:url('https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f64af19374484d1e18a6e79a439cff9d&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb');
    min-height:400px;
    height: 50vh;
    background-size:cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    position: relative;
	text-align: center;
	
	// &:after {
	//     content:'';
	//     position: absolute;
	//     top: 100%;
	//     left: 50%;
	//     margin-left: -50px;
	//     width: 0;
	//     height: 0;
	//     border-top: solid 50px #333;
	//     border-left: solid 50px transparent;
	//     border-right: solid 50px transparent;
	// }
	
	
`;

const HeroOverlay = styled.div`
	background: #00c6ff;
    background: -webkit-linear-gradient(to top, #0072ff, #00c6ff);
    background: linear-gradient(to top, #0072ffd9, #00c6ffcc);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 50px;
    
    h1 {
        color: #fff;
        padding-top: 50px;
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