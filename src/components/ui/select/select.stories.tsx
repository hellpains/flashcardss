import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './'

const meta = {
  argTypes: {},
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    options: [
      { title: 'Value1', value: 'value1' },
      { title: 'Value2', value: 'value2' },
      { title: 'Value3', value: 'value3' },
    ],
  },
}
