import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './drop-down-menu.module.scss'

type DropdownMenuProps = {
  children?: ReactNode
}
const DropdownMenu = ({ children }: DropdownMenuProps) => {
  return <RadixDropdownMenu.Root>{children}</RadixDropdownMenu.Root>
}

const DropdownMenuTrigger = forwardRef<
  ElementRef<typeof RadixDropdownMenu.Trigger>,
  ComponentPropsWithoutRef<typeof RadixDropdownMenu.Trigger>
>(({ className, ...rest }, ref) => {
  return <RadixDropdownMenu.Trigger className={`${s.trigger} ${className}`} ref={ref} {...rest} />
})

DropdownMenuTrigger.displayName = RadixDropdownMenu.Trigger.displayName

const DropdownMenuContent = forwardRef<
  ElementRef<typeof RadixDropdownMenu.Content>,
  ComponentPropsWithoutRef<typeof RadixDropdownMenu.Content>
>(({ children, className, ...rest }, ref) => {
  return (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content
        alignOffset={100}
        className={`${s.content} ${className}`}
        ref={ref}
        {...rest}
      >
        <div className={s.triangle}></div>
        {children}
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Portal>
  )
})

DropdownMenuContent.displayName = RadixDropdownMenu.Content.displayName

const DropdownMenuItem = forwardRef<
  ElementRef<typeof RadixDropdownMenu.Item>,
  ComponentPropsWithoutRef<typeof RadixDropdownMenu.Item>
>(({ className, ...rest }, ref) => {
  return <RadixDropdownMenu.Item className={`${s.item} ${className}`} ref={ref} {...rest} />
})

DropdownMenuItem.displayName = RadixDropdownMenu.Item.displayName

const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof RadixDropdownMenu.Separator>,
  ComponentPropsWithoutRef<typeof RadixDropdownMenu.Separator>
>(({ className, ...rest }, ref) => {
  return (
    <RadixDropdownMenu.Separator className={`${s.separator} ${className}`} ref={ref} {...rest} />
  )
})

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
}
