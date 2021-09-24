import React from 'react';
import MainMenu from '../main-menu/main-menu.component';
import { HeaderContainer, InnerContainer, LogoContainer, Logo } from './header.styles';

const Header = () => {
    return (
        <HeaderContainer>
            <InnerContainer>
                <Logo src='./images/logo.png' />
                <MainMenu />
            </InnerContainer>
        </HeaderContainer>
    );
}

export default Header;