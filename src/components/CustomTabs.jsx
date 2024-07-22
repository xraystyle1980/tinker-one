import { Tabs, TabList, TabPanels, TabPanel, Box } from "@chakra-ui/react";
import CustomTab from "./CustomTab";

const CustomTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Box display="flex" flex="1">
          <CustomTab>Tab 1</CustomTab>
          <CustomTab>Tab 2</CustomTab>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <CustomTab>Tab 3</CustomTab>
        </Box>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>Content 1</p>
        </TabPanel>
        <TabPanel>
          <p>Content 2</p>
        </TabPanel>
        <TabPanel>
          <p>Content 3</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default CustomTabs;
