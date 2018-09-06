import React, { Component } from 'react';
import GitHubCalendar from './Calendar';
import styled from 'styled-components';


const UserSection = styled.div`
    background: #ffffffaa;
    box-shadow: 5px 5px 20px #f8f9fa;
    border-radius: 4px;
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

class UserInfo extends Component {
    render() {
        return (
            <UserSection id={'user-section'} className={'col-md-10 offset-md-1'}>
                <div className="row">
                    <AvatarSection className="col-md-3">
                        <a id="profile-link" target="_blank" href={""}><AvatarImg id={"avatar-img"}/></a>
                    </AvatarSection>
                    <BioSection className="col-md-9">
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