import React, { Component } from 'react';
import GitHubCalendar from './Calendar';
import styled from 'styled-components';
import LinkIcon from '../img/octicons/link-external.svg';

const UserSection = styled.div`
	background: #f9f9f9;
	border-radius: 4px;
	padding: 20px;
	margin-top: 50px;
	margin-bottom: 50px;
	box-shadow: 0px 15px 20px 0 #33333333;
	border: 1px solid #ddd;
	transition: box-shadow 0.2s ease-in-out;
	border-bottom: 6px solid #86d07a;

	&:hover {
		box-shadow: 2px 2px 6px 0 #33333333;
		transition: box-shadow 0.2s ease-in-out;
	}

	@media all and (max-width: 767px) {
		#username,
		#favorite-language,
		#bio-text {
			text-align: center;
		}
	}
`;

const AvatarSection = styled.div`
	padding: 20px;
`;

const AvatarImg = styled.img`
	width: 100%;
	max-width: 125px;
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

const BlogSection = styled.div`
	text-align: center;

	img {
		display: inline-block;
		margin-right: 5px;
	}
	p {
		display: inline-block;
		color: #212529;
		font-size: 14px;
		margin-bottom: 0;
	}
`;

const LocationSection = styled.div`
	text-align: center;
	font-size: 14px;
`;

class UserInfo extends Component {
	render() {
		return (
			<UserSection id={'user-section'} className={'col-md-10 offset-md-1'}>
				<div className="row">
					<AvatarSection className="col-md-3">
						<a id="profile-link" target="_blank" href={''}>
							<AvatarImg id={'avatar-img'} />
						</a>
						<BlogSection id={'user-blog-section'}>
							<img src={LinkIcon} />
							<a target={'_blank'} id="user-blog">
								<p>Blog</p>
							</a>
						</BlogSection>
						<LocationSection id={'user-location-section'}>
							<p id={'user-location'} />
						</LocationSection>
					</AvatarSection>
					<BioSection className="col-md-9">
						<h1 id={'username'} className={'col-md-12'} />
						<h6 id={'favorite-language'} className={'col-md-12'} />
						<p id={'bio-text'} className={'col-md-12'} />
					</BioSection>
					<GitHubCalendar />
				</div>
			</UserSection>
		);
	}
}

export default UserInfo;
