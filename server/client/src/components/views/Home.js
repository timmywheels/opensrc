import React, {Component} from 'react';
import Github from '../Github';
import * as api from '../../js/github-api';
import Header from '../Header';
import Hero from '../Hero';


class Home extends Component {
    componentDidMount() {
        const usernameForm = document.getElementById('usernameForm');
        usernameForm.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.id === "submitBtn") {
                document.getElementById('latest-projects').innerHTML = "";
                let username = document.getElementById('usernameInput').value;
                if (username) {
                    // api.resetLanguageCounts();
                    api.requestUserData(username);
                    api.requestUserRepos(username);
                    // api.getFavoriteLanguage();
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