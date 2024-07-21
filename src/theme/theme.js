// theme.js
import { extendTheme } from "@chakra-ui/react";
import { defineStyleConfig } from "@chakra-ui/styled-system";

// Define the custom styles for Tabs
const tabsTheme = defineStyleConfig({
  baseStyle: {
    tab: {
      fontWeight: "bold",
      paddingLeft: '24', 
      paddingRight: '24', 
      paddingTop: '8', 
      paddingBottom: '8', 
      background: '#221D25', 
      boxShadow: '0px 1px 0px rgba(248, 244, 252, 0.04) inset', 
      borderRadius: 4,
      _selected: {
        color: "teal.500",
        borderColor: "teal.500",
      },
    },
    tablist: {
      borderBottom: "2px solid",
      borderColor: "gray.200",
    },
    tabpanel: {
      padding: 4,
    },
  },
  sizes: {
    md: {
      tab: {
        fontSize: "md",
        padding: 4,
      },
    },
    lg: {
      tab: {
        fontSize: "lg",
        padding: 6,
      },
    },
  },
  variants: {
    enclosed: {
      tablist: {
        mb: "-1px",
      },
      tab: {
        borderTopRadius: "md",
        border: "1px solid",
        borderColor: "gray.200",
        mb: "-1px",
        _selected: {
          color: "teal.600",
          borderColor: "inherit",
          borderBottomColor: "white",
        },
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "enclosed",
    colorScheme: "teal",
  },
});

// Extend the theme
const theme = extendTheme({
  components: {
    Tabs: tabsTheme,
  },
});

export default theme;
