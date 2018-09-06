import React from 'react';
import GitHubCalendar from 'github-calendar'

import JavaScript from '../img/javascript.svg';
import Html from '../img/html5.svg';
import Css from '../img/css3.svg';
import CPlusPlus from '../img/cplusplus.svg';
import C from '../img/c.svg';
import Java from '../img/java.svg';
import Php from '../img/php.svg';
import Python from '../img/python.svg';
import Ruby from '../img/ruby.svg';
import Swift from '../img/swift.svg';
import TypeScript from '../img/typescript.svg';
import Go from '../img/golang.svg';
import Github from '../img/github.svg';
import CSharp from '../img/c-sharp.svg';
import Jupyter from '../img/jupyter.svg';
import Haskell from '../img/haskell.svg';
import OCaml from '../img/ocaml.svg';
import Scala from '../img/scala.svg';
import Shell from '../img/bash.svg';
import Hack from '../img/hack.svg';
import Cuda from '../img/cuda.svg';
import Perl from '../img/perl.svg';
import Processing from '../img/processing.svg';
import D from '../img/d-lang.svg';
import Lua from '../img/lua-5.svg';
import Matlab from '../img/matlab.svg';


let languageCounts = {
    javaScriptCount: 0,
    pythonCount: 0,
    javaCount: 0,
    rubyCount: 0,
    phpCount: 0,
    cPlusPlusCount: 0,
    cssCount: 0,
    cSharpCount: 0,
    goCount: 0,
    cCount: 0,
    otherCount: 0
};

let {
    javaScriptCount,
    pythonCount,
    javaCount,
    rubyCount,
    phpCount,
    cPlusPlusCount,
    cssCount,
    cSharpCount,
    goCount,
    cCount,
    otherCount
} = languageCounts;

export function displayUserSections() {
    document.getElementById('user-section').style.display = 'inherit';
    document.getElementById('latest-projects-title').style.display = 'inherit';
    document.getElementById('language-counts').style.display = 'inherit';
    document.getElementById('github-calendar').style.display = 'initial';
}

export function getAvatar(avatarUrl, login, profileUrl) {
    let avatar = document.getElementById('avatar-img');
    let profileLink = document.getElementById('profile-link');
        avatar.src = avatarUrl;
        avatar.alt = `${login}'s Github Profile Image`;
        profileLink.href = profileUrl;
}

export function getBio(bioText) {
    document.getElementById('bio-text').innerText = bioText;
}

// export function getFavoriteLanguage() {
//     document.getElementById('favorite-language').innerText = `Favorite Language: `;
// }


export function getRepoCount(username, repoCount) {
    const repoLength = document.getElementById('latest-projects-title');
    repoLength.innerText = `${username}'s Latest Projects: (${repoCount})`;

}

export function getUsername(username) {
    const usernameHeading = document.getElementById('username');
    usernameHeading.innerHTML = username;
}

// export function getFollowLink(username) {
//     const followLink = document.getElementById('follow-link');
//     followLink.href = `https://github.com/users/follow?target=${username}`
// }

// Check if GitHub User is either 'User' or 'Organization'
function checkGitHubUserType(username, type) {
    if (type === 'User') {
        GitHubCalendar('.calendar', username, {global_stats: false, responsive: true})
    } else {
        document.getElementById('github-calendar').style.display = 'none';    }
}


export function getRepos(username, repo, repoText, repoUrl, repoIssuesCount, repoLanguage){

    // If repoText is null, add blank space
    if (repoText === null) {
        repoText = ' ';
    }
    // If repoText exists
    if (repoText) {
        // If repo title greater than 30 chars
        // Trim repo description more
        if (repo.length > 20) {
            if (repoText.length > 30) {
                repoText = repoText.substring(0, 19) + '...';
            }
        }
        // Trim length of repoText if over 45 chars
        if (repoText.length > 45) {
            repoText = repoText.substring(0, 44) + '...';
        }

        // Initialize langImg to be set in switch statement
        let langImg = '';
        // Check to see what language repo is using, set image accordingly

        switch (repoLanguage) {
            case 'JavaScript':
                langImg = JavaScript;
                javaScriptCount++;
                document.getElementById('javaScriptRepos').innerHTML = `JavaScript: ${javaScriptCount.toString()}`;
                break;
            case 'Python':
                langImg = Python;
                pythonCount++;
	            document.getElementById('pythonRepos').innerHTML = `Python: ${pythonCount.toString()}`;
	            break;
            case 'Java':
                langImg = Java;
                javaCount++;
	            document.getElementById('javaRepos').innerHTML = `Java: ${javaCount.toString()}`;
	            break;
            case 'Ruby':
                langImg = Ruby;
                rubyCount++;
	            document.getElementById('rubyRepos').innerHTML = `Ruby: ${rubyCount.toString()}`;
	            break;
            case 'PHP':
                langImg = Php;
                phpCount++;
	            document.getElementById('phpRepos').innerHTML = `PHP: ${phpCount.toString()}`;
	            break;
            case 'C++':
                langImg = CPlusPlus;
                cPlusPlusCount++;
	            document.getElementById('cPlusPlusRepos').innerHTML = `C++: ${cPlusPlusCount.toString()}`;
	            break;
            case 'CSS':
                langImg = Css;
                cssCount++;
	            document.getElementById('cssRepos').innerHTML = `CSS: ${cssCount.toString()}`;
	            break;
            case 'C#':
		        langImg = CSharp;
		        cSharpCount++;
		        document.getElementById('cSharpRepos').innerHTML = `C#: ${cSharpCount.toString()}`;
		        break;
            case 'Go':
                langImg = Go;
                goCount++;
	            document.getElementById('goRepos').innerHTML = `Go: ${goCount.toString()}`;
	            break;
            case 'C':
                langImg = C;
                cCount++;
	            document.getElementById('cRepos').innerHTML = `C: ${cCount.toString()}`;
	            break;
            case 'Objective-C':
                langImg = C;
                cCount++;
                break;
            case 'Objective-C++':
                langImg = CPlusPlus;
                cPlusPlusCount++;
                break;
            case 'HTML':
                langImg = Html;
                otherCount++;
	            break;
            case 'Swift':
                langImg = Swift;
                otherCount++;
	            break;
            case 'TypeScript':
                langImg = TypeScript;
                otherCount++;
	            break;
            case 'Jupyter Notebook':
                langImg = Jupyter;
                otherCount++;
                break;
            case 'Haskell':
                langImg = Haskell;
                otherCount++;
                break;
            case 'OCaml':
                langImg = OCaml;
                otherCount++;
                break;
            case 'Scala':
                langImg = Scala;
                otherCount++;
                break;
            case 'Shell':
                langImg = Shell;
                otherCount++;
                break;
            case 'Hack':
                langImg = Hack;
                otherCount++;
                break;
            case 'Perl':
                langImg = Perl;
                otherCount++;
                break;
            case 'Cuda':
                langImg = Cuda;
                otherCount++;
                break;
            case 'Processing':
                langImg = Processing;
                otherCount++;
                break;
            case 'D':
                langImg = D;
                otherCount++;
                break;
            case 'Lua':
                langImg = Lua;
                otherCount++;
                break;
            case 'Matlab':
                langImg = Matlab;
                otherCount++;
                break;
            default:
                langImg = Github;
                otherCount++;
	            document.getElementById('otherRepos').innerHTML = `Other: ${otherCount.toString()}`;
	            break;
        }

        // Create html cards to be rendered on the DOM with
        const cardHtml = `
            <div class="col-lg-3 col-md-4 col-sm-6 card-block">
                <div class="card">
                    <div class="card-body d-flex flex-column">
                        <a class="repo-link" href="https://github.com/${username}/${repo}/" target="_blank"><h5 class="card-title">${repo}</h5></a>
                        <p class="card-text">${repoText}</p>
                        <img class="language-img" src="${langImg}">
                        <a class="btn btn-primary mt-auto" target="_blank" href="https://github.com/${username}/${repo}/issues">${repoIssuesCount} Open Issues</a>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('latest-projects').insertAdjacentHTML('beforeend', cardHtml)

    }
}

export function requestUserData(username) {
    const url = `https://api.github.com/users/${username}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        const data = JSON.parse(this.response);
        console.log(data);

        const {avatar_url, bio, login, html_url, type} = data;

        getAvatar(avatar_url, login, html_url);
        getBio(bio);
        getUsername(login);
        // getFollowLink(login);
        displayUserSections();
        checkGitHubUserType(username, type);


    };
    xhr.send();
}

export function requestUserRepos(username) {
    const url = `https://api.github.com/users/${username}/repos?per_page=100`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        const data = JSON.parse(this.response);
        console.log(data);
        console.log(data['name']);
        console.log(data.length);

        // Loop through JSON data object
        for (let i in data) {

            // Destructure JSON to make more readable
            const { name, description, html_url, open_issues, language, owner } = data[i];

            getRepos(owner.login, name, description, html_url, open_issues, language);

            getRepoCount(owner.login, data.length);




        }

        // console.log('entries:', Object.entries(languageCounts));

    };

    xhr.send();
}


