// src/App.jsx
import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <Box minH="100vh" display="flex" flexDirection="column">
        <Header />
        <Hero />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
