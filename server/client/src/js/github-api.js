import GitHubCalendar from 'github-calendar';

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
import GitHubFork from '../img/github-fork.svg';

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

// Hack to get openIssues into getRepoIssuesButtons()
// From API call
let openIssues = [];
console.log(openIssues[99]);

export function getRepoIssuesButtons() {
	setTimeout(function() {
		let buttons = document.querySelectorAll('.issues');
		let cards = document.querySelectorAll('.card');

		for (let i = 0; i < buttons.length; i++) {
			if (openIssues[i] > 0 && openIssues[i] <= 10) {
				buttons[i].classList.add('issues-sm');
				cards[i].classList.add('issues-sm-card');
			} else if (openIssues[i] > 10 && openIssues[i] <= 50) {
				buttons[i].classList.add('issues-md');
				cards[i].classList.add('issues-md-card');
			} else if (openIssues[i] > 50 && openIssues[i] <= 100) {
				buttons[i].classList.add('issues-lg');
				cards[i].classList.add('issues-lg-card');
			} else if (openIssues[i] > 100) {
				buttons[i].classList.add('issues-xl');
				cards[i].classList.add('issues-xl-card');
			}

			console.log('buttons[i]:', buttons[i]);
		}
	}, 750);
}

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

function getUserLocation(location) {
	if (location) {
		document.getElementById('user-location').innerText = location;
	} else {
		document.getElementById('user-location-section').style.display = 'none';
	}
}

function getUserBlog(blog) {
	if (blog) {
		document.getElementById('user-blog').href = blog;
	} else {
		document.getElementById('user-blog-section').style.display = 'none';
	}
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
		GitHubCalendar('.calendar', username, {
			global_stats: false,
			responsive: true
		});
	} else {
		// Hide github calendar if user type is 'Organization'
		document.getElementById('github-calendar').style.display = 'none';
	}
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
			document.getElementById(
				'javaScriptRepos'
			).innerHTML = `JavaScript: ${javaScriptCount.toString()}`;
			javaScriptCount++;
			break;
		case 'Python':
			langImg = Python;
			pythonCount++;
			document.getElementById(
				'pythonRepos'
			).innerHTML = `Python: ${pythonCount.toString()}`;
			break;
		case 'Java':
			langImg = Java;
			javaCount++;
			document.getElementById(
				'javaRepos'
			).innerHTML = `Java: ${javaCount.toString()}`;
			break;
		case 'Ruby':
			langImg = Ruby;
			rubyCount++;
			document.getElementById(
				'rubyRepos'
			).innerHTML = `Ruby: ${rubyCount.toString()}`;
			break;
		case 'PHP':
			langImg = Php;
			phpCount++;
			document.getElementById(
				'phpRepos'
			).innerHTML = `PHP: ${phpCount.toString()}`;
			break;
		case 'C++':
			langImg = CPlusPlus;
			cPlusPlusCount++;
			document.getElementById(
				'cPlusPlusRepos'
			).innerHTML = `C++: ${cPlusPlusCount.toString()}`;
			break;
		case 'CSS':
			langImg = Css;
			cssCount++;
			document.getElementById(
				'cssRepos'
			).innerHTML = `CSS: ${cssCount.toString()}`;
			break;
		case 'C#':
			langImg = CSharp;
			cSharpCount++;
			document.getElementById(
				'cSharpRepos'
			).innerHTML = `C#: ${cSharpCount.toString()}`;
			break;
		case 'Go':
			langImg = Go;
			goCount++;
			document.getElementById(
				'goRepos'
			).innerHTML = `Go: ${goCount.toString()}`;
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
			document.getElementById(
				'otherRepos'
			).innerHTML = `Other: ${otherCount.toString()}`;
			break;
	}
	return langImg;
}

// Generate repo card element to the DOM
function createRepoElement(
	username,
	repo,
	repoText,
	repoIssuesCount,
	langImg,
	forks
) {
	// Create html cards to be rendered on the DOM with
	const cardHtml = `
            <div class="col-lg-3 col-md-4 col-sm-6 card-block">
                <div class="card">
                    <div class="card-body d-flex flex-column">
                        <div class="row">
                            <a class="repo-link col-8" href="https://github.com/${username}/${repo}/" target="_blank"><h5 class="card-title">${repo}</h5></a>
                            <p class="fork-link col-4"><img src="${GitHubFork}" alt="GitHub Fork Icon"/>${forks}</p>
                        </div>
                        <p class="card-text">${repoText}</p>
                        <img class="language-img" src="${langImg}">
                        <a class="btn issues mt-auto" target="_blank" href="https://github.com/${username}/${repo}/issues">${repoIssuesCount} Open Issues</a>
                    </div>
                </div>
            </div>
        `;
	// Append element to the DOM
	document
		.getElementById('latest-projects')
		.insertAdjacentHTML('beforeend', cardHtml);
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

// Trim number of forks
function trimForkNumber(forks) {
	forks = forks.toString();
	if (forks.length === 3) {
		return forks.substring(0, 2) + 'K';
	} else if (forks.length > 3) {
		return forks.substring(0, 3) + 'K';
	}
	return forks;
}

function getRepo(
	username,
	repo,
	repoText,
	repoUrl,
	repoIssuesCount,
	repoLanguage,
	forks
) {
	// If repoText is null, add blank space
	if (repoText === null) {
		repoText = '\n';
	}
	// If repoText exists
	if (repoText) {
		// Trim repo description if needed
		const repoDescription = trimRepoText(repo, repoText);
		// Get image fro repo language
		const langImg = setRepoLanguageImg(repoLanguage);
		// Get repo forks count
		const trimmedForkNum = trimForkNumber(forks);

		// Generate repo card element on DOM
		createRepoElement(
			username,
			repo,
			repoDescription,
			repoIssuesCount,
			langImg,
			trimmedForkNum
		);
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
		console.log('data.blog:', data.blog);

		const { avatar_url, bio, login, html_url, type, location, blog } = data;

		console.log('blog:', blog);

		getAvatar(avatar_url, login, html_url);
		getBio(bio);
		getUsername(login);
		getUserLocation(location);
		getUserBlog(blog);
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
		// console.log(data);

		// Loop through JSON data object
		for (let i in data) {
			// Destructure JSON data object to make more readable
			const {
				name,
				description,
				html_url,
				open_issues,
				language,
				owner,
				forks
			} = data[i];

			openIssues.push(open_issues);

			const { login } = owner;

			getRepo(login, name, description, html_url, open_issues, language, forks);
			getRepoCount(login, data.length);
		}
	};

	xhr.send();
}
