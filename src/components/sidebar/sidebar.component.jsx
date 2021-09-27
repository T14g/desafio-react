import React from 'react';
import MainMenu from '../main-menu/main-menu.component';
import { Container, Button } from './sidebar.styles';

const Sidebar = ({ showSidebar, closeSidebar }) => {

    return showSidebar ? (
        <Container>
            <Button onClick={closeSidebar}>X</Button>
            <MainMenu customClass="sidebar-menu" />
        </Container>
    ) : null;
}

export default Sidebar;