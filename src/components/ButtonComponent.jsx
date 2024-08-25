// ButtonComponent.js
import React from 'react';
import { Button } from '@chakra-ui/react';

const BasicButton = () => {
  return (
    <Button
      colorScheme="teal"   // Defines the color scheme of the button
      size="md"            // Size of the button ('xs', 'sm', 'md', 'lg')
      onClick={() => alert('Button clicked!')} // onClick handler
    >
      Click Me now!
    </Button>
  );
};

export default BasicButton;
