import keys from "../../config/keys";

const request = require("request");

export const user = {
    repos: []
};

export const getAuthenticatedUserId = () => {
    return new Promise((resolve, reject) => {
        try{
            request(`${keys.url}/api/current_user`, (err, res, body) => {
                const data = JSON.parse(body);
                console.log("__getAuthenticatedUserId()__", resolve(JSON.parse(body)));
                resolve(data)
            })
        } catch (e) {
            reject(e);
        }
    })
}

export const fetchDataByUserId = (userId) => {
    return new Promise((resolve, reject) => {
        try{
            request(`https://api.github.com/user/${userId}`, (err, res, body) => {
                if (err) return reject(err);
                const data = JSON.parse(body);
                // console.log("___DATA__:", resolve(JSON.parse(body)));
                resolve(data);
            })
        } catch (e) {
            reject(e)
        }

    })
}

export const getUserData = (username) => {
    try {
        const url = `https://api.github.com/users/${username}?client_id=${keys.github_client_id}&client_secret=${keys.github_client_secret}`;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.onload = function () {
            const data = JSON.parse(this.response);

            const { avatar_url, bio, login, html_url, type, location, blog } = data;

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

export const getUserRepos = (username) => {
    try {
        const url = `https://api.github.com/users/${username}/repos?per_page=100&client_id=${keys.github_client_id}&client_secret=${keys.github_client_secret}`;
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

                user.repos.push({ name, description, html_url, open_issues, language, owner, forks })
            }
            // console.log('__MYDATA__', data)
            return data;
        };

        xhr.send();
    } catch (err) {
        console.log("Error:", err);
    }
};

export const api = (username) => {
    getUserData(username);
    getUserRepos(username);
};