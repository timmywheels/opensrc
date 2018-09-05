import React from 'react';
import JavaScript from '../img/tw-javascript-opt.svg';
import Html from '../img/tw-html5-opt.svg';
import Css from '../img/tw-css3-opt.svg';
import CPlusPlus from '../img/tw-cplusplus-opt.svg';
import C from '../img/tw-c-opt.svg';
import Java from '../img/java.svg';
import Php from '../img/php.svg';
import Python from '../img/python.svg';
import Ruby from '../img/ruby.svg';
import Swift from '../img/swift.svg';
import TypeScript from '../img/typescript.svg';
import Go from '../img/golang.svg';
import Github from '../img/tw-github-opt.svg';
import CSharp from '../img/c-sharp.svg';

let javaScriptCount = 0;
let pythonCount = 0;
let javaCount = 0;
let rubyCount = 0;
let phpCount = 0;
let cPlusPlusCount = 0;
let cssCount = 0;
let cSharpCount = 0;
let goCount = 0;
let cCount = 0;
let otherCount = 0;

export function resetLanguageCounts() {
	javaScriptCount = 0;
	pythonCount = 0;
	javaCount = 0;
	rubyCount = 0;
	phpCount = 0;
	cPlusPlusCount = 0;
	cssCount = 0;
	cSharpCount = 0;
	goCount = 0;
	cCount = 0;
	otherCount = 0;
}

export function displayUserSections() {
    document.getElementById('user-section').style.display = 'inherit';
    document.getElementById('latest-projects-title').style.display = 'inherit';
    document.getElementById('language-counts').style.display = 'inherit';
    // document.getElementById('latest-projects').style.display = 'inherit';

}

export function getAvatar(url) {
    document.getElementById('avatar-img').src = url;
}

export function getBio(bioText) {
    document.getElementById('bio-text').innerText = bioText;
}

export function getRepoCount(username, repoCount) {
    const repoLength = document.getElementById('latest-projects-title');
    repoLength.innerText = `${username}'s Latest Projects: (${repoCount})`;

}

export function getUsername(username) {
    const usernameHeading = document.getElementById('username');
    usernameHeading.innerHTML = username;
}

export function getRepos(repos, repoText, repoUrl, repoIssuesCount, repoLanguage){

    if (repoText) {


        const projectsSection = document.getElementById('latest-projects');
        const cardBlock = document.createElement('div');
        const card = document.createElement('div');
        const cardBody = document.createElement('div');
        const cardTitle = document.createElement('h5');
        const cardText = document.createElement('p');
        const repoLink = document.createElement('a');
        const issueCount = document.createElement('p');
        // const programmingLanguage = document.createElement('p');
        const langImg = document.createElement('img');
        langImg.classList.add('language-img');

        if (repoText.length > 45) {
            repoText = repoText.substring(0, 44) + '...';
        }



        switch (repoLanguage) {
            case 'JavaScript':
                langImg.src = JavaScript;
                javaScriptCount++;
                document.getElementById('javaScriptRepos').innerHTML = `JavaScript: ${javaScriptCount.toString()}`;
                break;
            case 'Python':
                langImg.src = Python;
                pythonCount++;
	            document.getElementById('pythonRepos').innerHTML = `Python: ${pythonCount.toString()}`;
	            break;
            case 'Java':
                langImg.src = Java;
                javaCount++;
	            document.getElementById('javaRepos').innerHTML = `Java: ${javaCount.toString()}`;
	            break;
            case 'Ruby':
                langImg.src = Ruby;
                rubyCount++;
	            document.getElementById('rubyRepos').innerHTML = `Ruby: ${rubyCount.toString()}`;
	            break;
            case 'PHP':
                langImg.src = Php;
                phpCount++;
	            document.getElementById('phpRepos').innerHTML = `PHP: ${phpCount.toString()}`;
	            break;
            case 'C++':
                langImg.src = CPlusPlus;
                cPlusPlusCount++;
	            document.getElementById('cPlusPlusRepos').innerHTML = `C++: ${cPlusPlusCount.toString()}`;
	            break;
            case 'CSS':
                langImg.src = Css;
                cssCount++;
	            document.getElementById('cssRepos').innerHTML = `CSS: ${cssCount.toString()}`;
	            break;
	        case 'C#':
		        langImg.src = CSharp;
		        cSharpCount++;
		        document.getElementById('cSharpRepos').innerHTML = `C#: ${cSharpCount.toString()}`;
		        break;
            case 'Go':
                langImg.src = Go;
                goCount++;
	            document.getElementById('goRepos').innerHTML = `Go: ${goCount.toString()}`;
	            break;
            case 'C':
                langImg.src = C;
                cCount++;
	            document.getElementById('cRepos').innerHTML = `C: ${cCount.toString()}`;
	            break;
            case 'HTML':
                langImg.src = Html;
                otherCount++;
	            break;
            case 'Swift':
                langImg.src = Swift;
                otherCount++;
	            break;
            case 'TypeScript':
                langImg.src = TypeScript;
                otherCount++;
	            break;
            default:
                langImg.src = Github;
                otherCount++;
	            document.getElementById('otherRepos').innerHTML = `Other: ${otherCount.toString()}`;
	            break;
        }


        // const projectsSection = document.getElementById('latest-projects');
        // const card = React.createElement('div');
        // const cardBody = React.createElement('div');
        // const cardTitle = React.createElement('h5');
        // const cardText = React.createElement('p');
        // const repoLink = React.createElement('a');
        // const issueCount = React.createElement('p');
        // const programmingLanguage = React.createElement('p');


        // programmingLanguage.innerHTML = repoLanguage;
        issueCount.innerHTML = "Open Issues: " + repoIssuesCount;
        issueCount.classList.add('issue-count');
        repoLink.classList.add('btn', 'btn-primary', 'mt-auto');
        cardBlock.classList.add('col-md-4', 'col-sm-6', 'card-block');
        card.classList.add('card', 'p-2');

        // programmingLanguage.classList.add('repo-language');
        cardBody.classList.add('card-body', 'd-flex', 'flex-column');
        cardTitle.classList.add('card-title');
        cardText.classList.add('card-text');

        repoLink.setAttribute('target', '_blank');
        repoLink.innerHTML = 'View Repo';
        repoLink.href = repoUrl;
        cardTitle.innerText = repos;
        cardText.innerText = repoText;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(langImg);
        // cardBody.appendChild(programmingLanguage);
        cardBody.appendChild(repoLink);
        cardBody.appendChild(issueCount);
        card.appendChild(cardBody);
        cardBlock.appendChild(card);
        // const cardBlock = React.createElement('div', {className: 'col-md-3 card-block'}, card);
        projectsSection.appendChild(cardBlock);

    }
}

export function requestUserData(username) {
    const url = `https://api.github.com/users/${username}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        const data = JSON.parse(this.response);
        console.log(data);
        getAvatar(data.avatar_url);
        getBio(data.bio);
        getUsername(data.login);
        displayUserSections();
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


        for (let i in data) {

            const { name, description, html_url, open_issues, language } = data[i];

            getRepos(name, description, html_url, open_issues, language);

        getRepoCount(data[i].owner.login, data.length);
        }

    };

    xhr.send();
}