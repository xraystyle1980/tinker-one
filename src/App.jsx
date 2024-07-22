// src/App.jsx
import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from "./theme/theme";
import FullHeightFullWidthDiv from './components/FullHeightFullWidthDiv';
import Tabs from './components/Tabs';
import CustomTabs from './components/CustomTabs';
import '@fontsource/dm-sans'; // Defaults to weight 400.

function App() {
  return (
    <ChakraProvider theme={theme}>
      <FullHeightFullWidthDiv>
        <div style={{ backgroundColor: 'gray', padding: '20px', margin: '0px', borderRadius: '16px' }}>
          <CustomTabs />
        </div>
      </FullHeightFullWidthDiv>
    </ChakraProvider>
  );
}

export default App;