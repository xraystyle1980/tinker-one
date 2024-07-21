// Hello.js
import React from 'react';
import { ChakraProvider, Box, Heading, Text, Button, Stack } from '@chakra-ui/react';

function Hello() {
  return (
    <ChakraProvider>
      <Box bg="gray.100" minH="100vh" py={10}>
        <Box bg="white" maxW="4xl" mx="auto" p={6} borderRadius="md" shadow="md">
          <Heading as="h1" size="xl" mb={4}>
            Welcome to Chakra UI
          </Heading>
          <Text fontSize="lg" mb={6}>
            This is a simple example page using Chakra UI components. You can easily customize
            the look and feel using Chakra's built-in theming system.
          </Text>
          <Stack direction="row" spacing={4}>
            <Button colorScheme="teal" variant="solid">
              Get Started
            </Button>
            <Button colorScheme="teal" variant="outline">
              Learn More
            </Button>
          </Stack>
        </Box>
        <Box textAlign="center" mt={10}>
          <Text>&copy; 2024 My Chakra UI App. All rights reserved.</Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Hello;
