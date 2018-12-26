import React, {Component} from 'react';
import * as style from './repoCardStyle';
import * as img from './repoLanguageImage';
import GitHubFork from "../../../img/github-fork.svg";

class UserRepos extends Component {

	render() {
		let { repos } = this.props.user;
		console.log("UserRepos.js props", this.props);

		return (
			<div className={"container"}>
				<h2 className={'text-center mt-5 mb-5'}>User Projects</h2>
				<div className={"row"}>
					{repos.map((repo, key) => {

						const repoCardStyle = style.setRepoIssueColor(repo.open_issues);
						const repoLanguageImg = img.setRepoLanguageImg(repo.language);

						console.log("repo.open_issues", repo.open_issues)
						console.log("repossssss:", repo);

						return (
						<div className={"col-lg-3 col-md-4 col-sm-6 card-block"} key={key}>
						<div className={"card"}>
						<div className={'card-body d-flex flex-column'}>
						<div className={'row'}>
						<a className={'repo-link col-9'} href={repo.html_url} target="_blank"
						rel="noopener noreferrer">
						<h5 className={'card-title'}>{repo.name}</h5>
						</a>
						<p className="fork-link col-3"><img src={GitHubFork} alt="GitHub Fork Icon"/>{repo.forks}</p>
						</div>
						<p className={'card-text'}>{repo.description}</p>
						<img className="language-img" src={repoLanguageImg} alt={`${repo.language} Logo`}/>
						<a className={`btn issues mt-auto ${repoCardStyle}`} target="_blank" href={`${repo.html_url}/issues`}
						rel="noopener noreferrer">
						Issues: {repo.open_issues}
						</a>
						</div>
						</div>
						</div>
						)
					})}
				</div>
			</div>
		);
	}
}

export default UserRepos;
