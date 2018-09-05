import React, {Component} from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    margin: 50px;
    background: #dddddd80;
    // padding: 25px 50px;
    // box-shadow: 5px 5px 20px #33333333;
    border-radius: 4px;
    
    input[type=text] {
        border-radius: 4px 0 0 4px;
        outline: none;
        border: none;
    }
    
    input[type=submit] {
        border-radius: 0 4px 4px 0;
    }
    
    .form-control:focus{
        border: none !important;
        box-shadow: none !important;
    }
    
`;

class Form extends Component {
    render() {
        return (
            <div className={'col-md-8 offset-2'}>
                <StyledForm className={'form-inline'} id="usernameForm" action="">
                    <input type="text" id="usernameInput" className={'form-control col-sm-8'} placeholder="Enter Github Username"/>
                    <input type="submit" id="submitBtn" className={'btn btn-primary col-sm-4'} value="Search" />
                </StyledForm>
            </div>
        )
    }
}

export default Form;