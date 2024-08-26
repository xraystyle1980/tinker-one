import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from "./theme/theme"; // Import the custom theme
import FullHeightFullWidthDiv from './components/FullHeightFullWidthDiv';
import BasicButton from './components/ButtonComponent';
import ArrowRightIcon from './assets/icons/ArrowRight.svg'; // Assuming you are using the `img` method

function App() {
  return (
    <ChakraProvider theme={theme}> {/* Pass the custom theme */}
      <FullHeightFullWidthDiv>
        <BasicButton
          text="Next Step"
          icon={<img src={ArrowRightIcon} alt="Arrow Right" width="24" height="24" />}
          variant="outline" // Use 'solid' or 'outline' depending on your custom theme
          onClick={() => alert('Proceeding to the next step')}
        />
      </FullHeightFullWidthDiv>
    </ChakraProvider>
  );
}

export default App;
