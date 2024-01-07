import { ElementRef, forwardRef } from 'react'

import { CheckboxIcon } from '@/assets/icons'
import { Typography } from '@/components/ui/typography'
import * as RadixCheckbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  disabled?: boolean
  label?: string
  onCheckedChange?: (checked: boolean) => void
  position?: 'left' | 'right'
  required?: boolean
}
export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  ({ checked, disabled, label, onCheckedChange, position = 'right', required }, ref) => {
    return (
      <div className={`${s.checkbox}`}>
        <Typography
          as={'label'}
          className={`${s.label} ${disabled ? s.disabled : ''}`}
          variant={'body2'}
        >
          {position === 'left' && label}
          <div className={`${s.button} ${disabled ? s.disabled : ''}`}>
            <RadixCheckbox.Root
              checked={checked}
              className={s.root}
              disabled={disabled}
              onCheckedChange={onCheckedChange}
              ref={ref}
              required={required}
            >
              <RadixCheckbox.Indicator className={s.indicator}>
                <CheckboxIcon />
              </RadixCheckbox.Indicator>
            </RadixCheckbox.Root>
          </div>
          {position === 'right' && label}
        </Typography>
      </div>
    )
  }
)
