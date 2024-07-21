// src/components/Hero.jsx
import React from 'react';
import { Box, Heading, Text, Button, Stack } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box bg="gray.100" py={20} textAlign="center">
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to Chakra UI
      </Heading>
      <Text fontSize="lg" mb={6}>
        Build accessible React apps with speed.
      </Text>
      <Stack direction="row" spacing={4} justify="center">
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
        <Button colorScheme="teal" size="lg" variant="outline">
          Learn More
        </Button>
      </Stack>
    </Box>
  );
};

export default Hero;
