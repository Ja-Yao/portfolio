import React, { lazy, Suspense } from 'react';
import './App.scss';

import { Header } from './container';
import { Navbar } from './components';
import { Box, CircularProgress } from '@mui/material';

const About = lazy(() => import('./container/About/About'));
const Skills = lazy(() => import('./container/Skills/Skills'));
const Experience = lazy(() => import('./container/Experience/Experience'));
const Contact = lazy(() => import('./container/Contact/Contact'));
const Footer = lazy(() => import('./container/Footer/Footer'));

/**
 * The App component is a functional component that renders the entire website
 */
function App() {
  return (
    <Suspense fallback={<Box justifyContent='center' alignItems='center'><CircularProgress sx={{color: 'var(--first-color)'}}/></Box>}>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
