import React from 'react';
import MainMenu from '../main-menu/main-menu.component';
import { HeaderContainer, InnerContainer, LogoContainer, Logo } from './header.styles';

const Header = ({ lights }) => {
    return (
        <HeaderContainer lights={lights}>
            <InnerContainer>
                <Logo src='./images/logo.png' />
                <MainMenu lights={lights} />
            </InnerContainer>
        </HeaderContainer>
    );
}

export default Header;