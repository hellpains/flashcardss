import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

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
    label: 'Select',
    options: [
      { title: 'Value1', value: 'value1' },
      { title: 'Value2', value: 'value2' },
      { title: 'Value3', value: 'value3' },
    ],
  },
  render: args => {
    const [value, setValue] = useState('value1')

    console.log(value)

    return (
      <>
        <Select defaultValue={'value2'} onValueChange={setValue} value={value} {...args} />
      </>
    )
  },
}
