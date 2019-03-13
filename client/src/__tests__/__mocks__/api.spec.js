const userId = 17229444;

const userData = {
    "login": "timwheelercom",
    "id": 17229444,
    "node_id": "MDQ6VXNlcjE3MjI5NDQ0",
    "avatar_url": "https://avatars1.githubusercontent.com/u/17229444?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/timwheelercom",
    "html_url": "https://github.com/timwheelercom",
    "followers_url": "https://api.github.com/users/timwheelercom/followers",
    "following_url": "https://api.github.com/users/timwheelercom/following{/other_user}",
    "gists_url": "https://api.github.com/users/timwheelercom/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/timwheelercom/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/timwheelercom/subscriptions",
    "organizations_url": "https://api.github.com/users/timwheelercom/orgs",
    "repos_url": "https://api.github.com/users/timwheelercom/repos",
    "events_url": "https://api.github.com/users/timwheelercom/events{/privacy}",
    "received_events_url": "https://api.github.com/users/timwheelercom/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Tim Wheeler",
    "company": null,
    "blog": "https://timwheeler.com",
    "location": "Boston, MA",
    "email": null,
    "hireable": true,
    "bio": "I'm hellbent on becoming a better programmer every day. Creator of CodeSnippet.io & OpenSrc.io",
    "public_repos": 99,
    "public_gists": 0,
    "followers": 49,
    "following": 85,
    "created_at": "2016-02-14T05:26:50Z",
    "updated_at": "2019-03-04T14:21:35Z"
}



export const fetchDataByUserId = (userId) => {
    return new Promise((resolve, reject) => {
        try{
            const user = userData;
            console.log('__testUser__', user)
            resolve(user);
        } catch (e) {
            reject(e)
        }
    })
}
