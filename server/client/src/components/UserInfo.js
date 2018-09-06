import React, { Component } from 'react';
import GitHubCalendar from './Calendar';
import styled from 'styled-components';


const UserSection = styled.div`
    background: #ffffffaa;
    box-shadow: 5px 5px 20px #f8f9fa;
    border-radius: 4px;
    // margin: 50px 0;
    padding: 20px;
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

// const FollowButton = styled.div`
// 	float: right;
//     text-align: center;
//     text-decoration: none;
//     background: #6fd688;
//     border-radius: 4px;
//
//     a {
//     	color: #fff;
//     	letter-spacing: 2px;
//     	text-transform: uppercase;
//     	font-size: 14px;
//     }
//
// `;

class UserInfo extends Component {
    render() {
        return (
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
                    <GitHubCalendar/>
                </div>
            </UserSection>
        )
    }
}

export default UserInfo;