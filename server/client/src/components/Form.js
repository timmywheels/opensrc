import React, {Component} from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    margin: 50px;
    background: #dddddd80;
    border-radius: 4px;
    
    input[type=text] {
        outline: none;
        border: none;
        border-radius: 4px 0 0 4px;
        height: 50px;
        font-size: 20px;
        background: #ffffff0;
    }
    
    input[type=submit] {
        border-radius: 0 4px 4px 0;
        height: 50px;
        letter-spacing: 2px;
        background-color: #64d07d;
        border-color: #64d07d;
    }
    
    input[type=text]::-webkit-input-placeholder{
        color: #00529473;
    }
    
    .form-control:focus{
        border: none !important;
        box-shadow: none !important;
    }
`;

class Form extends Component {
    render() {
        return (
            <div className={'col-md-8 offset-md-2'}>
                <StyledForm className={'form-inline'} id="usernameForm" action="">
                    <input type="text" id="usernameInput" className={'form-control col-sm-9'} placeholder="Search Github Username"/>
                    <input type="submit" id="submitBtn" className={'btn btn-success col-sm-3'} value="SEARCH" />
                </StyledForm>
            </div>
        )
    }
}

export default Form;