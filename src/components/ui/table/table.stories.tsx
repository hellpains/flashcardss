import type { Meta, StoryObj } from '@storybook/react'

import { Edit, PlayCircle, TrashOutline } from '@/assets/icons'

import { Column, Table, TableBody, TableCell, TableHeader, TableRow } from './'

const meta = {
  component: Table,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>
const columns: Column[] = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'author',
    title: 'Created By',
  },
  {
    key: 'actions',
    title: '',
  },
]

export const Primary: Story = {
  args: {
    children: (
      <>
        <Table style={{ width: '1007px' }}>
          <TableHeader columns={columns} sort={{ direction: 'asc', key: 'asc' }} />
          <TableBody>
            <TableRow key={1}>
              <TableCell>name</TableCell>
              <TableCell>cardsCount</TableCell>
              <TableCell>updated</TableCell>
              <TableCell>author</TableCell>
              <TableCell>
                <div style={{ alignItems: 'center', display: 'flex', gap: '10px' }}>
                  <PlayCircle />
                  <Edit />
                  <TrashOutline />
                </div>
              </TableCell>
            </TableRow>
            <TableRow key={1}>
              <TableCell>name</TableCell>
              <TableCell>cardsCount</TableCell>
              <TableCell>updated</TableCell>
              <TableCell>author</TableCell>
              <TableCell>
                <div style={{ alignItems: 'center', display: 'flex', gap: '10px' }}>
                  <PlayCircle />
                </div>
              </TableCell>
            </TableRow>
            <TableRow key={1}>
              <TableCell>name</TableCell>
              <TableCell>cardsCount</TableCell>
              <TableCell>updated</TableCell>
              <TableCell>author</TableCell>
              <TableCell>
                <div style={{ alignItems: 'center', display: 'flex', gap: '10px' }}>
                  <PlayCircle />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </>
    ),
  },
}
