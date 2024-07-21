// src/components/Header.jsx
import React from 'react';
import { Box, Flex, Text, Button, Stack } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg="teal.500" color="white" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>Logo</Box>
        <Flex alignItems="center">
          <Stack direction="row" spacing={4}>
            <Button colorScheme="teal" variant="outline">
              Sign In
            </Button>
            <Button colorScheme="teal" variant="solid">
              Sign Up
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
