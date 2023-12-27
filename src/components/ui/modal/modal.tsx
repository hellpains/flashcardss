import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Close } from '@/assets/icons'
import { Typography } from '@/components'
import * as RadixDialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

type ModalProps = {
  // cancelButton?: string
  children?: ReactNode
  // confirmButton?: string
  // onCancel?: any
  // onConfirm?: any
  onOpenChange?: (open: boolean) => void
  open?: boolean
  title?: string
} & Omit<ComponentPropsWithoutRef<typeof RadixDialog.Dialog>, 'onOpenChange' | 'open'>
export const Modal = ({ children, title, ...props }: ModalProps) => {
  return (
    <RadixDialog.Root {...props}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={s.overlay} />
        <RadixDialog.Content className={s.content}>
          <div className={s.header}>
            <RadixDialog.Title className={s.title}>
              <Typography variant={'h2'}>{title}</Typography>
            </RadixDialog.Title>
            <RadixDialog.Close className={s.close}>
              <Close fill={'white'} />
            </RadixDialog.Close>
          </div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}
