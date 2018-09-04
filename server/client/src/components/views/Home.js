import React, {Component} from 'react';
import styled from 'styled-components';
import OpenSrcLogo from '../../img/opensrc-logo-001.png';
import Github from '../Github';
import * as api from '../../js/github-api';


const Logo = styled.img`
    height: 80px;
    width: auto;
`;

class Home extends Component {
    componentDidMount() {
        const usernameForm = document.getElementById('usernameForm');
        usernameForm.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.id === "submitBtn") {
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
                <div className="col-md-12">
                    <a href={'/'}><Logo src={OpenSrcLogo} alt="OpenSrc Logo"/></a>
                </div>
                <div>
                    <Github/>
                </div>
            </div>
        )
    }
}

export default Home;