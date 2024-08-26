// src/theme/theme.js
import { extendTheme } from '@chakra-ui/react';

// Define custom button styles
const customButtonStyles = {
  baseStyle: {
    fontWeight: 'bold', // Normal, bold, etc.
  },
  sizes: {
    xl: {
      h: '56px',
      fontSize: 'lg',
      px: '32px',
    },
  },
  variants: {
    solid: {
      bg: 'primary.500', // Custom primary color from theme
      color: 'white',
      _hover: {
        bg: 'primary.600',
      },
    },
    outline: {
      borderColor: 'primary.500',
      color: 'primary.500',
      _hover: {
        bg: 'primary.50',
      },
    },
  },
  defaultProps: {
    size: 'md', // Default size
    variant: 'solid', // Default variant
    colorScheme: 'primary', // Default color scheme
  },
};

// Extend Chakra's theme with custom button styles
const theme = extendTheme({
  colors: {
    primary: {
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1',
    },
  },
  components: {
    Button: customButtonStyles, // Apply custom styles to Button component
  },
});

export default theme;
