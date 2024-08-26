import React from 'react';
import { Button } from '@chakra-ui/react';

const BasicButton = ({ text, icon, variant, onClick }) => {
  return (
    <Button
      colorScheme="primary" // Use the custom primary color from the theme
      size="md"             // You can change size to 'sm', 'md', 'lg', 'xl'
      variant={variant}     // Use the variant prop to choose between solid, outline, etc.
      onClick={onClick}
      rightIcon={icon}      // Use icon prop to place it on the right
    >
      {text}
    </Button>
  );
};

BasicButton.defaultProps = {
  text: 'Click Me now!',
  icon: null,
  variant: 'solid', // Default to solid if not specified
  onClick: () => alert('Button clicked!'),
};

export default BasicButton;
