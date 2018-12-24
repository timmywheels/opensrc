import React, {Component} from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Background from '../img/opensrc-waves-bg.jpg';
import WavesDivider from './WavesDivider';

const HeroSection = styled.div`
	background:url('${Background}');
    min-height:500px;
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
		font-weight: 500;
	}

	p {
		color: #eee;
		font-weight: 100;
		letter-spacing: 1px;
	}
`;

class Hero extends Component {
	render() {
		// const user = this.state.username;
		// const route = `/user/${this.state.username}`;
		// const repos = this.props.user.repos[0].name;

		// console.log(":::::REPOS::::::", this.props.user.repos);

		console.log("Hero.js Props:", this.props);

		return (
			<HeroSection>
				<HeroOverlay>
					<h1>Contribute to Something Great.</h1>
					<div>Username: </div>
					{/*<SearchBar user={this.props.user} onChange={this.props.onChange} onSubmit={this.props.onSubmit} action={this.props.action}/>*/}

                    <SearchBar {...this.props} {...this.state} />

				</HeroOverlay>
				<WavesDivider/>
			</HeroSection>
		);
	}
}

export default Hero;
