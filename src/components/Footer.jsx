// src/components/Footer.jsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="teal.500" color="white" py={4} textAlign="center">
      <Text>&copy; 2024 My Chakra UI App. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
