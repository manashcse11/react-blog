import React from 'react';
import Container from './Container';

const StaticResponse = (props) => {
    return (
        <Container>
            <div>{props.text}</div>   
        </Container>
    );
}

export default StaticResponse;