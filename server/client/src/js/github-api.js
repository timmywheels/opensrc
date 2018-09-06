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

// Destructure languageCounts object
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


// Get user github username
function getUsername(username) {
    const usernameHeading = document.getElementById('username');
    usernameHeading.innerHTML = username;
}

// Get user github avatar img
function getAvatar(avatarUrl, login, profileUrl) {
    let avatar = document.getElementById('avatar-img');
    let profileLink = document.getElementById('profile-link');
        avatar.src = avatarUrl;
        avatar.alt = `${login}'s Github Profile Image`;
        profileLink.href = profileUrl;
}

// Get user github bio text
function getBio(bioText) {
    document.getElementById('bio-text').innerText = bioText;
}

// Get number of repos by user
function getRepoCount(username, repoCount) {
    const repoLength = document.getElementById('latest-projects-title');
    repoLength.innerText = `${username}'s Latest Projects: (${repoCount})`;
}

// Check if GitHub User is either 'User' or 'Organization'
function checkGitHubUserType(username, type) {
    if (type === 'User') {
        // Display github calendar if user type is 'User'
        GitHubCalendar('.calendar', username, {global_stats: false, responsive: true})
    } else {
        // Hide github calendar if user type is 'Organization'
        document.getElementById('github-calendar').style.display = 'none';    }
}

// Display user sections to DOM (unhide them)
function displayUserSections() {
    document.getElementById('user-section').style.display = 'inherit';
    document.getElementById('latest-projects-title').style.display = 'inherit';
    document.getElementById('language-counts').style.display = 'inherit';
    document.getElementById('github-calendar').style.display = 'initial';
}

function setRepoLanguageImg(repoLanguage) {
    // Initialize langImg to be set in switch statement
    let langImg = '';

    switch (repoLanguage) {
        case 'JavaScript':
            langImg = JavaScript;
            document.getElementById('javaScriptRepos').innerHTML = `JavaScript: ${javaScriptCount.toString()}`;
            javaScriptCount++;
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
    return langImg;
}

// Generate repo card element to the DOM
function createRepoElement(username, repo, repoText, repoIssuesCount, langImg) {
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
    // Append element to the DOM
    document.getElementById('latest-projects').insertAdjacentHTML('beforeend', cardHtml)
}

// Trim repo description to fit repo card element nicely
function trimRepoText(repo, repoText) {
    // If repo title is over 20 chars
    if (repo.length > 20) {
        // If repo desc is over 30 chars
        if (repoText.length > 30) {
            // Trim repo desc to 20 chars
            return repoText.substring(0, 19) + '...';
        }
    }
    // Trim length of repoText if over 45 chars
    else {
        if (repoText.length > 45) {
            return repoText.substring(0, 44) + '...';
        }
    }
    return repoText;
}

function getRepos(username, repo, repoText, repoUrl, repoIssuesCount, repoLanguage){
    // If repoText is null, add blank space
    if (repoText === null) {
        repoText = ' ';
    }
    // If repoText exists
    if (repoText) {
        // Trim repo description if needed
        const repoDescription = trimRepoText(repo, repoText);
        // Get image fro repo language
        const langImg = setRepoLanguageImg(repoLanguage);
        // Generate repo card element on DOM
        createRepoElement(username, repo, repoDescription, repoIssuesCount, langImg);
    }
}


//****************************************************************************************
//****************************************************************************************
//**************************EXPORT FUNCTIONS TO HOME.JS***********************************
//****************************************************************************************
//****************************************************************************************

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

            // Destructure JSON data object to make more readable
            const { name, description, html_url, open_issues, language, owner } = data[i];
            const { login } = owner;

            getRepos(login, name, description, html_url, open_issues, language);
            getRepoCount(login, data.length);

        }
    };

    xhr.send();
}


