import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchTrendingRepos} from "../../../actions/index";

class TrendingRepos extends Component {
	componentDidMount() {
		this.props.fetchTrendingRepos();
	}

	render() {
		// console.log("TRENDING:", this.props.trending);
		return (
			<div>
				<h2 className={"text-center mt-5 mb-5"}>Trending Projects</h2>
				<div className={"row"}>
					{this.props.trending.map((repo, key) => {
						return (
							<div
								className={"col-lg-3 col-md-4 col-sm-6 card-block"}
								key={key}
							>
								<div className={"card"}>
									<div className={"card-body d-flex flex-column"}>
										<div className={"row"}>
											<a
												className={"repo-link col-12"}
												href={`https://github.com/${repo.repoName.replace(
													/\s/g,
													""
												)}`}
												target="_blank"
												rel="noopener noreferrer"
											>
												<h5 className={"card-title"}>{repo.repoName}</h5>
											</a>
											{/*<p class="fork-link col-4"><img src="/static/media/github-fork.3421d08d.svg" alt="GitHub Fork Icon">3</p>*/}
										</div>
										<p className={"card-text"}>{repo.repoDesc}</p>
										{/*<img class="language-img" src="/static/media/html5.4b55d3c2.svg">*/}
										<a
											className={"btn issues mt-auto"}
											target="_blank"
											href={`https://github.com/${repo.repoName.replace(
												/\s/g,
												""
											)}`}
											rel="noopener noreferrer"
										>
											{repo.starCount}
										</a>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

function mapStateToProps({trending}) {
	return {trending};
}

export default connect(
	mapStateToProps,
	{fetchTrendingRepos}
)(TrendingRepos);
