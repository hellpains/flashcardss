import type { Meta, StoryObj } from '@storybook/react'

import { Label } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  component: Label,
  tags: ['autodocs'],
  title: 'Components/Label',
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Labe',
    disabled: false,
    variant: 'primary',
  },
}
