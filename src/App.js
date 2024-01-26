import Navbar from './components/Navbar';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Footer from './components/Footer';
import WidthContainer from './components/WidthContainer';

const GlobalStyle = createGlobalStyle`
  body{
    font-family:"Roboto", sans-serif;
  }
`;

const lightTheme = {
  primary: '#333333',
  secondary: '#BDBDBD',
  text: '#000',
  light: '#F2F2F2',
  background: '#fff',
};

const Container = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Container>
        <WidthContainer>{Navbar}</WidthContainer>
        {Footer}
      </Container>
    </ThemeProvider>
  );
}

export default App;
