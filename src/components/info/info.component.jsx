import React from 'react';
import { InfoContainer } from './info.styles';

const Info = ({ children }) => {
    return (
        <InfoContainer>{children}</InfoContainer>
    );
}

export default Info;