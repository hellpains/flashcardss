import type { Meta, StoryObj } from '@storybook/react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from './'

const meta = {
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: (
      <Tabs defaultValue={'1'}>
        <TabsList>
          <TabsTrigger value={'1'}>Switcher</TabsTrigger>
          <TabsTrigger value={'2'}>Switcher</TabsTrigger>
          <TabsTrigger value={'3'}>Switcher</TabsTrigger>
          <TabsTrigger value={'4'}>Switcher</TabsTrigger>
        </TabsList>
        <TabsContent value={'1'}>1</TabsContent>
        <TabsContent value={'2'}>2</TabsContent>
        <TabsContent value={'3'}>3</TabsContent>
        <TabsContent value={'4'}>4</TabsContent>
      </Tabs>
    ),
  },
}
export const Disabled: Story = {
  args: {
    children: (
      <Tabs>
        <TabsList>
          <TabsTrigger disabled value={'1'}>
            Switcher
          </TabsTrigger>
          <TabsTrigger disabled value={'2'}>
            Switcher
          </TabsTrigger>
          <TabsTrigger disabled value={'3'}>
            Switcher
          </TabsTrigger>
          <TabsTrigger disabled value={'4'}>
            Switcher
          </TabsTrigger>
        </TabsList>
        <TabsContent value={'1'}>1</TabsContent>
        <TabsContent value={'2'}>2</TabsContent>
        <TabsContent value={'3'}>3</TabsContent>
        <TabsContent value={'4'}>4</TabsContent>
      </Tabs>
    ),
  },
}
