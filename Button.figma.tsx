import figma from '@figma/code-connect'
import BasicButton from './src/components/ButtonComponent'

figma.connect(BasicButton, 'https://www.figma.com/design/AJIToa7EjWBnyO6yxg3d5l/Code-Connect?node-id=16-32&m=dev', {
  props: {
    text: figma.string('Text Content'),
    hasIcon: figma.boolean('hasIcon'),
    variant: figma.enum('Variant', {
      Solid: 'Solid',
      Outline: 'Outline',
    }),
  },
  example: ({ hasIcon, text, variant }) => {
    return (
      <BasicButton hasIcon={hasIcon} variant={variant}>
        {text}
      </BasicButton> 
    )
  },
})