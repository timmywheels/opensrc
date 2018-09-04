import React, {Component} from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    margin: 50px;
`;

class Form extends Component {
    render() {
        return (
            <div className={'col-md-8 offset-2'}>
                <StyledForm className={'form-inline'} id="usernameForm" action="">
                    <input type="text" id="usernameInput" className={'form-control col-sm-8'} placeholder="Enter Github Username" />
                    <input type="submit" id="submitBtn" className={'btn btn-primary col-sm-4'} value="Search" />
                </StyledForm>
            </div>
        )
    }
}

export default Form;