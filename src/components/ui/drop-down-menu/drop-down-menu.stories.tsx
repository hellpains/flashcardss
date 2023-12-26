import type { Meta, StoryObj } from '@storybook/react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './drop-down-menu'

const meta = {
  argTypes: {},
  component: DropdownMenu,
  tags: ['autodocs'],
  title: 'Components/DropdownMenu',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger>hello</DropdownMenuTrigger>

          <DropdownMenuContent align={'end'} alignOffset={-12} sideOffset={12}>
            <DropdownMenuItem>profile</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>login</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    ),
  },
}
