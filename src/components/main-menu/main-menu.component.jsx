import { MenuContainer, MenuItem } from './main-menu.styles';

const MainMenu = ({ lights }) => {

    return (
        <MenuContainer lights={lights}>
            <MenuItem>HTML5</MenuItem>
            <MenuItem>CSS3</MenuItem>
            <MenuItem>JAVASCRIPT</MenuItem>
            <MenuItem>REACT</MenuItem>
            <MenuItem>NEXT.JS</MenuItem>
        </MenuContainer>
    );
}

export default MainMenu;