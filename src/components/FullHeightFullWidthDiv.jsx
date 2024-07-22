import React from 'react';
import { Box } from '@chakra-ui/react';

const FullHeightFullWidthDiv = ({ children }) => {
  return (
    <Box
      background='#888888'
      display="flex"
      height="100vh"
      width="100vw"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  );
};

export default FullHeightFullWidthDiv;
