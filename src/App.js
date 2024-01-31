import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Projects from './pages/Projects';
import HomeLayout from './layout/HomeLayout';

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

function App() {
  return (
    <Router>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />

        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="projects">
              <Route index element={<Projects />} />
              <Route path=":id" element={<Project />} />
            </Route>
            <Route path="certs" element={<Certifications />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
