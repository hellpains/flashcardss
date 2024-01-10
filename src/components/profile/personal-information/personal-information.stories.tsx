import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInformation } from '@/components'

const meta = {
  component: PersonalInformation,
  tags: ['autodocs'],
  title: 'Auth/PersonalInformation',
} satisfies Meta<typeof PersonalInformation>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
