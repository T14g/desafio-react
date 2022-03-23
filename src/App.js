import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/Themes';
import { MainTitle, Strong, Container, Wrapper } from './App.styles';
import Header from './components/header/header.component';
import Info from './components/info/info.component';
import PostGrid from './components/post-grid/post-grid.component';
import Footer from './components/footer/footer.component';
import Modal from './components/modal/modal.component';
import Sidebar from './components/sidebar/sidebar.component';
import ExpandableItem from './components/expandable-item/expandable-item.component';

const App = () => {

  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [lights, setLights] = useState(false);

  const closeModal = () => {
    document.querySelector('body').style.overflow = 'auto';
    setShowModal(false)
  }

  const openModal = (item) => {
    document.querySelector('body').style.overflow = 'hidden';
    setShowModal(item);
  }

  const openSidebar = () => {
    document.querySelector('body').style.overflow = 'hidden';
    setShowSidebar(true);
  }

  const closeSidebar = () => {
    document.querySelector('body').style.overflow = 'auto';
    setShowSidebar(false);
  }

  const actions = {
    'show-modal': openModal,
    'turn-lights': () => setLights(!lights),
  }

  return (
    <ThemeProvider theme={lights ? lightTheme : darkTheme}>
      <Container>

        <Header openSidebar={openSidebar} />

        <MainTitle>
          Criei este site <Strong>responsivo</Strong> com
          <Strong> React</Strong> utilizando <Strong>styled-components</Strong>
        </MainTitle>

        <Wrapper>
          <Info>Este é um componente de informação, incluindo ícone em SVG, feito com Styled-components</Info>
          <Info>Este é outro componente de informação, incluindo ícone em SVG, também foi feito com Styled</Info>
        </Wrapper>

        <PostGrid actions={actions} />
        
        <ExpandableItem />

        <Footer />

      </Container>
      <Modal showModal={showModal} closeModal={closeModal} />
      <Sidebar showSidebar={showSidebar} closeSidebar={closeSidebar} />
    </ThemeProvider>

  );
}

export default App;
