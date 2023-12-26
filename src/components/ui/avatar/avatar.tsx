import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixAvatar from '@radix-ui/react-avatar'

import s from './avatar.module.scss'

const AvatarRoot = forwardRef<
  ElementRef<typeof RadixAvatar.Root>,
  ComponentPropsWithoutRef<typeof RadixAvatar.Root>
>(({ className, ...rest }, ref) => {
  return <RadixAvatar.Root className={`${s.root} ${className}`} ref={ref} {...rest} />
})

const AvatarImage = forwardRef<
  ElementRef<typeof RadixAvatar.Image>,
  ComponentPropsWithoutRef<typeof RadixAvatar.Image>
>(({ className, ...rest }, ref) => {
  return <RadixAvatar.Image className={`${s.image} ${className}`} ref={ref} {...rest} />
})

const AvatarFallback = forwardRef<
  ElementRef<typeof RadixAvatar.Fallback>,
  ComponentPropsWithoutRef<typeof RadixAvatar.Fallback>
>(({ className, ...rest }, ref) => {
  return (
    <RadixAvatar.Fallback
      className={`${s.fallback} ${className}`}
      delayMs={600}
      ref={ref}
      {...rest}
    />
  )
})

export { AvatarFallback, AvatarImage, AvatarRoot }
