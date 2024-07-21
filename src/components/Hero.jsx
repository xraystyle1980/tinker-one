// src/components/Hero.jsx
import React from 'react';
import { Box, Heading, Text, Button, Stack } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box bg="gray.100" py={20} textAlign="center">
      <Heading as="h1" size="2xl" mb={4}>
        H1 2xl
      </Heading>
      <Text fontSize="lg" mb={6}>
        fontSize lg
      </Text>
    </Box>
  );
};

export default Hero;
