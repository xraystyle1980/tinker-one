// src/App.jsx
import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from "./theme/theme";
import FullHeightFullWidthDiv from './components/FullHeightFullWidthDiv';
import BasicButton from './components/ButtonComponent';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <FullHeightFullWidthDiv>
        <BasicButton />
      </FullHeightFullWidthDiv>
    </ChakraProvider>
  );
}

export default App;