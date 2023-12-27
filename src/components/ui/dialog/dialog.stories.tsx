import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Button } from '@/components'

import { Dialog } from './'

const meta = {
  argTypes: {},
  component: Dialog,
  tags: ['autodocs'],
  title: 'Components/Dialog',
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Dialog',
    onOpenChange: () => {},
    open: true,
    title: 'Dialog',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)} variant={'secondary'}>
          Open Dialog
        </Button>
        <Dialog
          {...args}
          onCancel={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
          onOpenChange={setOpen}
          open={open}
          title={'Dialog'}
        >
          Dialog Content
        </Dialog>
      </>
    )
  },
}
