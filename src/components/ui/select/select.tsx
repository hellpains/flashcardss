import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowDown } from '@/assets/icons'
import { Label } from '@/components'
import * as RadixSelect from '@radix-ui/react-select'

import s from './select.module.scss'

type SelectProps = {
  label?: string
  options: { title: any; value: any }[]
  placeholder?: string
  value?: any
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>
export const Select = ({ label, options, placeholder, value, ...rest }: SelectProps) => {
  return (
    <>
      <Label>{label}</Label>
      <RadixSelect.Root {...rest}>
        <RadixSelect.Trigger className={s.trigger}>
          <RadixSelect.Value placeholder={placeholder} />
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
    </>
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
