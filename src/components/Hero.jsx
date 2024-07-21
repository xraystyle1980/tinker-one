// src/components/Hero.jsx
import React from 'react';
import { Box, Heading, Text, Tabs, TabList, TabPanels, Tab, TabIndicator, TabPanel } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box bg="#161219" py={20} textAlign="center">
      
      <Heading as="h1" size="2xl" mb={4} color='white'>
        H1 2xl
      </Heading>
      <Text fontSize="lg" mb={6} color='white'>
        fontSize lg
      </Text>

      <Tabs isFitted variant='unstyled'>
        <TabList>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Tab 1</Tab>
          <Tab _selected={{ color: 'white', bg: 'green.400' }}>Tab 2</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

    </Box>
  );
};

export default Hero;







