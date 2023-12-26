import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './'

const meta = {
  argTypes: {},
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    options: [
      { title: 'Value 1', value: 'value1' },
      { title: 'Value 2', value: 'value2' },
      { title: 'Value 3', value: 'value3' },
    ],
  },
}
