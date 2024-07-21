// src/components/Features.jsx
import React from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

const Feature = ({ title, text, icon }) => {
  return (
    <Stack align="center">
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        color="white"
        rounded="full"
        bg="gray.100"
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color="gray.600">{text}</Text>
    </Stack>
  );
};

const Features = () => {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title="Feature One"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title="Feature Two"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title="Feature Three"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        />
      </SimpleGrid>
    </Box>
  );
};

export default Features;
