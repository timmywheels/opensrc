import React, {Component} from 'react';
import * as style from './repoCardStyle';
import * as img from './repoLanguageImage';
import GitHubFork from "../../../img/github-fork.svg";
import LanguageCounts from "./LanguageCounts"

class UserRepos extends Component {
	render() {
		let {repos, login} = this.props.user;
		console.log("UserRepos.js props", this.props);
		if (!repos) {
			return null;
		}
		if (login){
			return (
				<div className={"container"}>
					<div>{this.props.children}</div>
					<h2 className={'col-md-12'} id={'latest-projects-title'}>
						Latest Projects
					</h2>
					<LanguageCounts />
					<div className={"row"}>
						{repos.map((repo, key) => {
							const repoCardStyle = style.setRepoIssueColor(repo.open_issues);
							const repoLanguageImg = img.setRepoLanguageImg(repo.language);
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
											<a className={`btn issues mt-auto ${repoCardStyle}`} target="_blank"
											   href={`${repo.html_url}/issues`}
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
		if (login === undefined) {
            return (
                <div>
                    {alert("User not found!")}
                    {this.props.history.push("/")}
                </div>
            )
        }
    }
}

export default UserRepos;
