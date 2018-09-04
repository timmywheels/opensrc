import React, {Component} from 'react';
import styled from 'styled-components';

const MernSection = styled.h1`
    font-size: 30px;
`;

class Mern extends Component {
    render() {
        return (
            <div>
                <MernSection>MERN Stack Boilerplate</MernSection>
            </div>
        )
    }
}

export default Mern;