import React, {Component} from 'react';
import styled from 'styled-components';
import Form from './Form';
import Background from '../img/opensrc-bg-001.jpg';

const HeroSection = styled.div`
	background:url('${Background}');
    min-height:400px;
    height: 50vh;
    background-size:cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    position: relative;
	text-align: center;
	
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