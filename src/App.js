import './App.css';
import { MainTitle, Strong, Container } from './App.styles';
import Header from './components/header/header.component';
import Info from './components/info/info.component';
import PostGrid from './components/post-grid/post-grid.component';
import Footer from './components/footer/footer.component';

const App = () => {
  return (
    <Container>
      
      <Header />

      <MainTitle>
        Criei este site <Strong>responsivo</Strong> com
        <Strong>React</Strong> utilizando <Strong>styled-components</Strong>
      </MainTitle>

      <Info>A fonte utilizada é a Open Sans!</Info>
      <Info>A fonte utilizada é a Open Sans!</Info>

      <PostGrid />

      <Footer />
    </Container>
  );
}

export default App;
