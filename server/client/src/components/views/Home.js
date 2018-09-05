import React, {Component} from 'react';
import styled from 'styled-components';
// import OpenSrcLogo from '../../img/opensrc-logo-001.png';
import Github from '../Github';
import * as api from '../../js/github-api';
import Header from '../Header';
import Hero from '../Hero';


const Logo = styled.img`
    height: 80px;
    width: auto;
    margin: 0 auto;
    display: block;
`;





class Home extends Component {
    componentDidMount() {
        const usernameForm = document.getElementById('usernameForm');
        usernameForm.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.id === "submitBtn") {
                document.getElementById('latest-projects').innerHTML = "";
                let username = document.getElementById('usernameInput').value;
                if (username) {
                    api.requestUserData(username);
                    api.requestUserRepos(username);
                }
            }
        });
    }
    render() {
        return (
            <div>
	            <Header/>
	            <Hero/>
	            <div className="container">
	                <div>
	                    <Github/>
	                </div>
	            </div>
            </div>
        )
    }
}

export default Home;