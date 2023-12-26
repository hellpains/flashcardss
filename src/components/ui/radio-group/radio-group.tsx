import * as React from 'react'

import { Typography } from '@/components'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

const RadioGroupRoot = React.forwardRef<
  React.ElementRef<typeof RadixRadioGroup.Root>,
  React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Root>
>(({ className, ...props }, ref) => {
  return <RadixRadioGroup.Root className={`${s.root} ${className}`} {...props} ref={ref} />
})

RadioGroupRoot.displayName = RadixRadioGroup.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadixRadioGroup.Item>,
  React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Item>
>(({ children, className, ...props }, ref) => {
  return (
    <div className={s.itemContainer}>
      <RadixRadioGroup.Item className={`${s.item} ${className}`} ref={ref} {...props}>
        <RadixRadioGroup.Indicator className={s.icon} forceMount />
      </RadixRadioGroup.Item>
    </div>
  )
})

RadioGroupItem.displayName = RadixRadioGroup.Item.displayName

type Option = {
  title: string
  value: string
}
export type RadioGroupProps = Omit<
  React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Root>,
  'children'
> & {
  options: Option[]
}
const RadioGroup = React.forwardRef<React.ElementRef<typeof RadixRadioGroup.Root>, RadioGroupProps>(
  (props, ref) => {
    const { options, ...restProps } = props

    return (
      <RadioGroupRoot {...restProps} ref={ref}>
        {options.map(o => (
          <div className={s.label} key={o.value}>
            <RadioGroupItem id={o.value} value={o.value} />
            <Typography as={'label'} htmlFor={o.value} variant={'body2'}>
              {o.title}
            </Typography>
          </div>
        ))}
      </RadioGroupRoot>
    )
  }
)

export { RadioGroup, RadioGroupItem, RadioGroupRoot }
