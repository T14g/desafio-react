import MainMenu from '../main-menu/main-menu.component';
import { HeaderContainer, InnerContainer, Logo } from './header.styles';

const Header = () => {
    return (
        <HeaderContainer>
            <InnerContainer>
                <Logo src='./assets/images/logo.png' />
                <MainMenu />
            </InnerContainer>
        </HeaderContainer>
    );
}

export default Header;