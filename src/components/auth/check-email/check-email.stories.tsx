import { CheckEmail } from '@/components/auth/check-email/check-email'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: CheckEmail,
  tags: ['autodocs'],
  title: 'Auth/CheckEmail',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
