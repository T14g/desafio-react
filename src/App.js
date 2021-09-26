import React, { useState } from 'react';
import { MainTitle, Strong, Container } from './App.styles';
import Header from './components/header/header.component';
import Info from './components/info/info.component';
import PostGrid from './components/post-grid/post-grid.component';
import Footer from './components/footer/footer.component';
import Modal from './components/modal/modal.component';

const App = () => {

  const [showModal, setShowModal] = useState(false);
  const [lights, setLights] = useState(false);

  const closeModal = () => {
    document.querySelector('body').style.overflow = 'auto';
    setShowModal(false)
  }

  const openModal = (item) =>{
    document.querySelector('body').style.overflow = 'hidden';
    setShowModal(item);
  }

  const actions = {
    'show-modal': openModal,
    'turn-lights': () => setLights(!lights)
  };

  return (
    <React.Fragment>
      <Container lights={lights}>

        <Header lights={lights} />

        <MainTitle>
          Criei este site <Strong>responsivo</Strong> com
          <Strong> React</Strong> utilizando <Strong>styled-components</Strong>
        </MainTitle>

        <Info>Este é um componente de informação, incluindo ícone em SVG, feito com Styled-components</Info>
        <Info>Este é outro componente de informação, incluindo ícone em SVG, também foi feito com Styled</Info>

        <PostGrid actions={actions} />

        <Footer />
      </Container>
      <Modal showModal={showModal} closeModal={closeModal} />
    </React.Fragment>
  );
}

export default App;
