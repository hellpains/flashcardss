import { Meta, StoryObj } from '@storybook/react'

import { TextField } from '.'

const meta = {
  argTypes: {},
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    disabled: false,
    label: 'Input',
    placeholder: 'Input',
  },
}

export const Password: Story = {
  args: {
    disabled: false,
    label: 'Input',
    password: true,
    placeholder: 'Input',
  },
}

export const Search: Story = {
  args: {
    disabled: false,
    label: 'Input',
    placeholder: 'Input',
    search: true,
  },
}

export const Error: Story = {
  args: {
    disabled: false,
    error: 'Error!',
    label: 'Input',
    placeholder: 'Input',
  },
}
