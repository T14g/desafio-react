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

  const actions = {
    'show-modal': () => setShowModal(!showModal),
    'turn-lights': () => setLights(!lights)
  };

  return (
    <React.Fragment>
      <Container lights={lights}>

        <Header lights={lights} />

        <MainTitle>
          Criei este site <Strong>responsivo</Strong> com
          <Strong>React</Strong> utilizando <Strong>styled-components</Strong>
        </MainTitle>

        <Info>A fonte utilizada é a Open Sans!</Info>
        <Info>A fonte utilizada é a Open Sans!</Info>

        <PostGrid actions={actions} />

        <Footer />
      </Container>
      <Modal showModal={showModal} closeModal={() => setShowModal(false)} />
    </React.Fragment>
  );
}

export default App;
