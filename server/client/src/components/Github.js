import React, { Component } from "react";
import Form from './Form';
import styled from 'styled-components';
import '../js/github-api';


const AvatarSection = styled.div`
    padding: 20px;
`;

const AvatarImg = styled.img`
    max-width: 100px;
    height: auto;
    border-radius: 50%;
`;

const BioSection = styled.div`
    padding: 20px;
    font-size: 25px;
    
`;

class Github extends Component {
    render() {
        return (
            <div className={'row'}>
                <Form/>
                <AvatarSection className="col-md-3">
                    <AvatarImg src="" alt="" id={"avatar-img"}/>
                </AvatarSection>
                <BioSection className="col-md-9">
                    <p id={"bio-text"}></p>
                </BioSection>
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