import { CheckboxIcon } from '@/assets/icons'
import { Typography } from '@/components/ui/typography'
import * as RadixCheckbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

type CheckboxProps = {
  checked?: boolean
  disabled?: boolean
  label?: string
  onCheckedChange?: (checked: boolean) => void
  position?: 'left' | 'right'
  required?: boolean
}
export const Checkbox = ({
  checked,
  disabled,
  label,
  onCheckedChange,
  position = 'right',
  required,
}: CheckboxProps) => {
  return (
    <div className={s.checkbox}>
      <Typography as={'label'} className={s.label} variant={'body2'}>
        {position === 'left' && label}
        <div className={s.button}>
          <RadixCheckbox.Root
            checked={checked}
            className={s.root}
            disabled={disabled}
            onCheckedChange={onCheckedChange}
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
