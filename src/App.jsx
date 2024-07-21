// src/App.jsx
import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from "./theme/theme";
import Header from './components/Header';
import Tabs from './components/Tabs';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" minW="100vw" display="flex" flexDirection="column">
        <Header />
        <Tabs />
        
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
