import React, { Component } from "react";
import Form from './Form';
import styled from 'styled-components';
import '../js/github-api';

const UserSection = styled.div`
    // background: #ddd;
    background: rgba(0,0,0,.075);
    box-shadow: 5px 5px 20px #f8f9fa;
    border-radius: 4px;
    margin: 50px 0;
    border: 5px solid #ddd;
`;

const AvatarSection = styled.div`
    padding: 20px;
`;

const AvatarImg = styled.img`
    max-width: 150px;
    height: auto;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
`;

const BioSection = styled.div`
    padding: 20px;
    font-size: 18px;
    margin: auto;
    display: block;
    
`;

class Github extends Component {
    render() {
        return (
            <div className={'row'}>
                <UserSection id={'user-section'} className={'row col-md-12'}>
                <AvatarSection className="col-md-2">
                    <AvatarImg src="" alt="" id={"avatar-img"}/>
                </AvatarSection>
                <BioSection className="col-md-10">
                    <h1 id={'username'}></h1>
                    <p id={"bio-text"}></p>
                </BioSection>
                </UserSection>
                <div className="col-md-12">
                    <h2 id={"latest-projects-title"}>Latest Projects</h2>
                    <div className={'row'} id="latest-projects">
                    </div>
                </div>
            </div>
        )
    }
}

export default Github;