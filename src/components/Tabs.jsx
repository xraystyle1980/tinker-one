import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function MyTabs() {
  return (
    <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
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
}

export default MyTabs;
