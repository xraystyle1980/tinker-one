import { Tab } from "@chakra-ui/react";

const CustomTab = ({ children, ...props }) => {
  return (
    <Tab
      _hover={{ bg: "gray.100", color: "teal.500" }}
      _selected={{ bg: "teal.500", color: "white" }}
      {...props}
    >
      {children}
    </Tab>
  );
};

export default CustomTab;
