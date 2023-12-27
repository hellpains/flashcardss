import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Authorized: Story = {
  args: { isLogin: true },
}
export const Unauthorized: Story = {
  args: { isLogin: false },
}
