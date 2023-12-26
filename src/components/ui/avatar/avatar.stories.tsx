import type { Meta, StoryObj } from '@storybook/react'

import { AvatarFallback, AvatarImage, AvatarRoot } from './'

const meta = {
  component: AvatarRoot,
  tags: ['autodocs'],
  title: 'Components/Avatar',
} satisfies Meta<typeof AvatarRoot>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: (
      <>
        <AvatarRoot>
          <AvatarImage
            src={
              'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'
            }
          />
          <AvatarFallback>СД</AvatarFallback>
        </AvatarRoot>
      </>
    ),
  },
}

export const DoesntImage: Story = {
  args: {
    children: (
      <>
        <AvatarRoot>
          <AvatarImage />
          <AvatarFallback>СД</AvatarFallback>
        </AvatarRoot>
      </>
    ),
  },
}
