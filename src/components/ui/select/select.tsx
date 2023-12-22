import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowDown } from '@/assets/icons'
import * as RadixSelect from '@radix-ui/react-select'

import s from './select.module.scss'

type SelectProps = {
  options: { title: string; value: string }[]
  value?: string
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>
export const Select = ({ options, value, ...rest }: SelectProps) => {
  const itemSelect = options?.find(o => o.value === value)

  return (
    <RadixSelect.Root {...rest}>
      <RadixSelect.Trigger className={s.trigger}>
        <div>{itemSelect?.title}</div>
        <RadixSelect.Icon className={s.arrows}>
          <ArrowDown />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content className={`${s.content}`} position={'popper'}>
          {options.map(o => {
            return (
              <SelectItem key={o.value} value={o.value}>
                {o.title}
              </SelectItem>
            )
          })}
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}

const SelectItem = forwardRef<
  ElementRef<typeof RadixSelect.Item>,
  ComponentPropsWithoutRef<typeof RadixSelect.Item>
>(({ children, value, ...rest }, ref) => {
  return (
    <RadixSelect.Item className={s.item} ref={ref} value={value} {...rest}>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    </RadixSelect.Item>
  )
})
