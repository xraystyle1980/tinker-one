import React from 'react';
import figma from '@figma/code-connect';
import BasicButton from './src/components/ButtonComponent';

// Removed TypeScript interface, as it's not needed in plain JavaScript

figma.connect(
  BasicButton,
  'https://www.figma.com/design/AJIToa7EjWBnyO6yxg3d5l/Code-Connect?node-id=16-32&m=dev',
  {
    props: {
      text: figma.string('Text Content'), // Assumed this provides a default value
      hasIcon: figma.boolean('hasIcon', false), // Explicitly provide a default value
      variant: figma.enum('Variant', {
        Solid: 'Solid',
        Outline: 'Outline',
      }),
    },
    example: ({ hasIcon = false, text = 'Default Text', variant = 'Solid' }) => (
      <BasicButton hasIcon={hasIcon} variant={variant}>
        {text}
      </BasicButton>
    ),
  }
);
