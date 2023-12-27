import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Modal } from './'

const meta = {
  argTypes: {},
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Modal',
    onOpenChange: () => {},
    open: true,
    title: 'Modal',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Modal</button>
        <Modal {...args} onOpenChange={setOpen} open={open}>
          Modal content
        </Modal>
      </>
    )
  },
}
