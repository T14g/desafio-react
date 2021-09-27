import MainMenu from '../main-menu/main-menu.component';
import {
    HeaderContainer,
    InnerContainer,
    Logo,
    Hamburguer,
    LineSpan
} from './header.styles';

const Header = ({ openSidebar }) => {
    return (
        <HeaderContainer>
            <InnerContainer>
                <Logo src='./assets/images/logo.png' />
                <MainMenu />
                <Hamburguer onClick={openSidebar}>
                    <LineSpan />
                    <LineSpan />
                    <LineSpan />
                </Hamburguer>
            </InnerContainer>
        </HeaderContainer>
    );
}

export default Header;