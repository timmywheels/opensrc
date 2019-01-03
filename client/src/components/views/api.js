import keys from "../../config/keys";

const request = require("request");

export const user = {
	repos: []
};

export const getAuthenticatedUsername = (githubId) => {
	request(`https://api.github.com/user/${githubId}?client_id=${keys.github_client_id}&client_secret=${keys.github_client_secret}`, (err, res, body) => {
		if (!err && res.statusCode == 200) {
			const data = JSON.parse(body)
			return data.login;
		}
		else {
			console.log("Error:", res.statusCode)
		}
	})
}

const getUserData = (username) => {
	try {
		const url = `https://api.github.com/users/${username}?client_id=${keys.github_client_id}&client_secret=${keys.github_client_secret}`;
		const xhr = new XMLHttpRequest();
		xhr.open('GET', url, false);
		xhr.onload = function () {
			const data = JSON.parse(this.response);

			const {avatar_url, bio, login, html_url, type, location, blog} = data;

			user.avatar_url = avatar_url;
			user.bio = bio;
			user.login = login;
			user.html_url = html_url;
			user.type = type;
			user.location = location;
			user.blog = blog;

		};
		xhr.send();
	} catch (err) {
		console.log("Error:", err)
	}
};

const getUserRepos = (username) => {
	try {
		const url = `https://api.github.com/users/${username}/repos?per_page=10&client_id=${keys.github_client_id}&client_secret=${keys.github_client_secret}`;
		const xhr = new XMLHttpRequest();
		xhr.open('GET', url, false);
		xhr.onload = function () {
			const data = JSON.parse(this.response);

			if (data.message === 'Not Found') {
				return;
			}

			for (let i in data) {

				const {
					name,
					description,
					html_url,
					open_issues,
					language,
					owner,
					forks
				} = data[i];

				user.repos.push({name, description, html_url, open_issues, language, owner, forks})
			}
		};

		xhr.send();
	}
	catch (err) {
		console.log("Error:", err);
	}
};

export const api = (username) => {
	getUserData(username);
	getUserRepos(username);
};