const user = {
	repos: []
};

const getUserData = async (username) => {
	const url = `https://api.github.com/users/${username}`;
	const xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.onload = function() {
		const data = JSON.parse(this.response);
		console.log(data);

		const { avatar_url, bio, login, html_url, type, location, blog } = data;
		user.avatar_url = avatar_url;
		user.bio = bio;
		user.login = login;
		user.html_url = html_url;
		user.type = type;
		user.location = location;
		user.blog = blog
		console.log("User:", user);
	};
	xhr.send();
}
getUserData("timwheelercom")


const getUserRepos = (username) => {
	const url = `https://api.github.com/users/${username}/repos?per_page=10`;
	const xhr = new XMLHttpRequest();

	xhr.open('GET', url, true);
	xhr.onload = async function() {
		const data = JSON.parse(this.response);
		console.log(data);

		if (data.message === 'Not Found') {
			return;
		}

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

			user.repos.push(data[i])

			console.log("Updated User:", user)

		}
	};

	xhr.send();
}

getUserRepos("timwheelercom")