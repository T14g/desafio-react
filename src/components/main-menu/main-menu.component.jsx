import { MenuContainer, MenuItem, StyledLink } from './main-menu.styles';

const MainMenu = ({ customClass }) => {

    return (
        <MenuContainer className={customClass}>
            <MenuItem><StyledLink>HTML5</StyledLink></MenuItem>
            <MenuItem><StyledLink>CSS3</StyledLink></MenuItem>
            <MenuItem><StyledLink>JAVASCRIPT</StyledLink></MenuItem>
            <MenuItem><StyledLink>REACT</StyledLink></MenuItem>
            <MenuItem><StyledLink>NEXT.JS</StyledLink></MenuItem>
        </MenuContainer>
    );
}

export default MainMenu;