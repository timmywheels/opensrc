import React, {Component} from 'react';
import styled from 'styled-components';
import Github from '../Github';
import * as api from '../../js/github-api';
import Header from '../Header';
import Hero from '../Hero';
import {resetCounts} from "../../js/github-api";


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
                api.resetLanguageCounts();
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