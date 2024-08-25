import { extendTheme } from "@chakra-ui/react";
import { color } from "framer-motion";

// Define custom styles for Tabs
const customTabs = {
  baseStyle: {
    tab: {
        fontFamily: 'DM Sans',
        fontWeight: '400',
        _selected: {
            color: '#DCC8F0',
            boxShadow: '0px 0px 0px 1px #100414, 0px 0px 0px 1px rgba(248, 244, 252, 0.04) inset, 0px 1px 0px 0px rgba(248, 244, 252, 0.04) inset',
        },
        _hover: {
            color: '#DCC8F0',
        },
        _focus: {
            boxShadow: '0px 0px 0px 1px #100414, 0px 0px 0px 1px rgba(248, 244, 252, 0.04) inset, 0px 1px 0px 0px rgba(248, 244, 252, 0.04) inset',
            outline: 'none', // Ensure no default outline is applied
        },
        _focusVisible: {
            boxShadow: '0px 0px 0px 1px #100414, 0px 0px 0px 1px rgba(248, 244, 252, 0.04) inset, 0px 1px 0px 0px rgba(248, 244, 252, 0.04) inset',
            outline: 'none', // Ensure no default outline is applied
        },
        _active: {
            bg: '#1A161D', 
            color: '#DCC8F0',
        },
    },
    tablist: {
        borderBottom: 'none',
        borderColor: 'none',
        borderRadius: 16,
        display: "flex",
        pt: 4,
        pr: 2,
        pb: 4,
        pl: 2,
        justifyContent: "space-between",
        /* Dimension/Depressed/Default */
        boxShadow: '0px -1px 0px 0px rgba(255, 255, 255, 0.16) inset, 0px 0px 0px 1px rgba(0, 0, 0, 0.68) inset',
    },
    tabpanel: {
      p: 4,
      mt: 4,
      mb: 4,
      bg: 'none',
      color: 'white',
    },
  },
  sizes: {
    md: {
      tab: {
        fontSize: 48,
        pt: 4,
        pr: 12,
        pb: 4,
        pl: 12,
        mr: 2,
        ml: 2,
      },
    },
  },
  variants: {
    enclosed: {
      tablist: {
        borderBottom: 'none',
        background: '#161219',
      },
      tab: {
        color: '#8F8796',
        border: 12,
        borderColor: 'none',
        _selected: {
          color: "#DCC8F0",
          background: '#221D25',
          boxShadow: '0px 0px 0px 1px #100414, 0px 0px 0px 1px rgba(248, 244, 252, 0.04) inset, 0px 1px 0px 0px rgba(248, 244, 252, 0.04) inset',
        },
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "enclosed",
    colorScheme: "dark",
  },
};

// Extend the theme
const theme = extendTheme({
  components: {
    Tabs: customTabs,
  },
});

export default theme;
