import React from 'react';
import { InfoContainer } from './info.styles';
import { SVG } from './info.styles';

const Info = ({ children }) => {
    return (
        <InfoContainer>
            <SVG/>{children}
        </InfoContainer>
    );
}

export default Info;