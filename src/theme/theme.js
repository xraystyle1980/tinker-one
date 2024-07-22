import { extendTheme } from "@chakra-ui/react";

// Define custom styles for Tabs
const customTabs = {
  baseStyle: {
    tab: {
      color: "gray.500",
      fontWeight: "bold",
      m: 1,
      _selected: {
        color: "teal.500",
        borderColor: "teal.500",
      },
      _hover: {
        color: "teal.300",
      },
    },
    tablist: {
      borderBottom: "2px solid",
      borderColor: "gray.200",
      borderRadius: '8',
      display: "flex",
      p: 4,
      background: '#000',
      justifyContent: "space-between", // Custom structure
    },
    tabpanel: {
      p: 4,
      mt: 4,
      mb: 4,
      ml: 1,
      mr: 1,
      bg: 'none', // Custom background for tab panels
    },
  },
  sizes: {
    md: {
      tab: {
        fontSize: 48,
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
};

// Extend the theme
const theme = extendTheme({
  components: {
    Tabs: customTabs,
  },
});

export default theme;
