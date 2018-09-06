import React, { Component } from "react";
import styled from 'styled-components';
import '../js/github-api';
import 'github-calendar';

const UserSection = styled.div`
    background: #ffffffaa;
    box-shadow: 5px 5px 20px #f8f9fa;
    border-radius: 4px;
    // margin: 50px 0;
    margin-top: 50px;
    margin-bottom: 50px;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 15px 0 #33333333;
  	transition: box-shadow 0.2s ease-in-out;
  	
  	&:hover{
  		box-shadow: 2px 2px 6px 0 #33333333;
  		transition: box-shadow 0.2s ease-in-out;
  	}
`;

const AvatarSection = styled.div`
    padding: 20px;
`;

const AvatarImg = styled.img`
    width: 100%;
    max-width: 100px;
    height: auto;
    border-radius: 50%;
    margin: 10px auto;
    display: block;
`;

const BioSection = styled.div`
    padding: 20px;
    font-size: 18px;
    margin: auto;
    display: block;
`;

const LanguageCount = styled.li`
    width: fit-content;
    font-size: 14px;
    padding: 5px 10px;
    color: #fff;
    display: inline-block;
    text-align: center;
    margin: 5px;
    font-weight: 400;
    background: #00000055;
    box-shadow: 0px 0px 15px rgba(108, 117, 125, 0.25);
    
}`;

const FollowButton = styled.div`
	float: right;
    text-align: center;
    text-decoration: none;
    background: #6fd688;
    border-radius: 4px;
    
    a {
    	color: #fff;
    	letter-spacing: 2px;
    	text-transform: uppercase;
    	font-size: 14px;
    }
    
`;

const GithubCalendar = styled.div`
	display: none;
`;

class Github extends Component {
    render() {
        return (
            <div className={'row'}>
                <UserSection id={'user-section'} className={'col-md-10 offset-md-1'}>
					<div className="row">

						<AvatarSection className="col-md-3">
							<a id="profile-link" target="_blank" href={""}><AvatarImg id={"avatar-img"}/></a>
						</AvatarSection>
						<BioSection className="col-md-9">
							{/*<FollowButton id={'follow-btn'} className={'col-md-2'}><a id={'follow-link'} href="">Follow</a></FollowButton>*/}
							<h1 id={'username'} className={'col-md-12'}/>
							<h6 id={'favorite-language'} className={'col-md-12'}/>
							<p id={"bio-text"} className={'col-md-12'}/>
						</BioSection>
						<GithubCalendar id={'github-calendar'} className={"calendar"}>
							Loading the data just for you.
						</GithubCalendar>
					</div>
                </UserSection>
                <div className="col-md-12">
                    <h2 className={'col-md-12'} id={"latest-projects-title"}>Latest Projects</h2>
                    <div>
                        <ul id={'language-counts'}>
	                        <LanguageCount id="javaScriptRepos" className={'badge-pill badge-warning'}>
		                        JavaScript: 0
	                        </LanguageCount>
	                        <LanguageCount id="pythonRepos" className={'badge-pill badge-warning'}>
	                            Python: 0
	                        </LanguageCount>
	                        <LanguageCount id="javaRepos" className={'badge-pill badge-warning'}>
	                            Java: 0
	                        </LanguageCount>
	                        <LanguageCount id="rubyRepos" className={'badge-pill badge-warning'}>
	                            Ruby: 0
	                        </LanguageCount>
	                        <LanguageCount id="phpRepos" className={'badge-pill badge-warning'}>
	                            PHP: 0
	                        </LanguageCount>
	                        <LanguageCount id="cPlusPlusRepos" className={'badge-pill badge-warning'}>
	                            C++: 0
	                        </LanguageCount>
	                        <LanguageCount id="cssRepos" className={'badge-pill badge-warning'}>
	                            CSS: 0
	                        </LanguageCount>
	                        <LanguageCount id="cSharpRepos" className={'badge-pill badge-warning'}>
	                            C#: 0
	                        </LanguageCount>
	                        <LanguageCount id="goRepos" className={'badge-pill badge-warning'}>
	                            Go: 0
	                        </LanguageCount>
	                        <LanguageCount id="cRepos" className={'badge-pill badge-warning'}>
	                            C: 0
	                        </LanguageCount>
	                        <LanguageCount id="otherRepos" className={'badge-pill badge-warning'}>
	                            Other: 0
	                        </LanguageCount>
                        </ul>
                    </div>
                    <div className={'row'} id="latest-projects">
                    </div>
                </div>
            </div>
        )
    }
}

export default Github;