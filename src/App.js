import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Projects from './pages/Projects';
import HomeLayout from './layout/HomeLayout';
import ScrollToTop from './utils/ScrollToTop';
import { AppContext } from './Context';
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './utils/firebase';

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
  const [projects, setProjects] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'Projects'), (snapshot) => {
        setProjects(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }),
    []
  );

  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <AppContext.Provider value={{ projects: projects }}>
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
        </AppContext.Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
