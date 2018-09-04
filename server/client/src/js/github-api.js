export function getAvatar(url) {
    document.getElementById('avatar-img').src = url;
}

export function getBio(bioText) {
    document.getElementById('bio-text').innerText = bioText;
}

export function getRepoCount(repoCount) {
    const repoLength = document.getElementById('latest-projects-title');
    repoLength.innerText = `Latest Projects: (${repoCount})`;

}

export function getRepos(repos, repoText, repoUrl, repoIssuesCount){
    if (repoText) {

        if (repoText.length > 45) {
            repoText = repoText.substring(0, 44) + '...';
        }

        const projectsSection = document.getElementById('latest-projects');
        const card = document.createElement('div');
        const cardBody = document.createElement('div');
        const cardTitle = document.createElement('h5');
        const cardText = document.createElement('p');
        const repoLink = document.createElement('a');
        const issueCount = document.createElement('p');


        issueCount.innerHTML = "Open Issues: " + repoIssuesCount;
        repoLink.classList.add('btn', 'btn-primary', 'mt-auto');
        card.classList.add('card', 'col-md-3', 'mx-2', 'my-2');
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
        cardBody.appendChild(repoLink);
        cardBody.appendChild(issueCount);
        card.appendChild(cardBody);
        projectsSection.appendChild(card);

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
    };
    xhr.send();
}

export function requestUserRepos(username) {
    const url = `https://api.github.com/users/${username}/repos?per_page=300`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        const data = JSON.parse(this.response);
        console.log(data);
        console.log(data['name']);
        console.log(data.length);
        for (var i in data) {
            getRepos(data[i].name, data[i].description, data[i].html_url, data[i].open_issues)
        }
        getRepoCount(data.length);
    };

    xhr.send();
}