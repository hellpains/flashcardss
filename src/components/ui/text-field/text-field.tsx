import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Close, Eye, EyeOff, Search } from '@/assets/icons'
import { Label } from '@/components/ui/label'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './text-field.module.scss'

import { Button } from '../button'

export type TextFieldProps = {
  className?: string
  disabled?: boolean
  error?: string
  label?: string
  onValueChange?: (value: string) => void
  password?: boolean
  search?: boolean
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { className, disabled, error, label, onChange, onValueChange, password, search, ...rest },
    ref
  ) => {
    const [passwordVisible, setPasswordVisible] = useState(true)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.target.value)
    }

    const classNames = {
      container: clsx(s.container, disabled && s.disabled),
      errorText: clsx(s.errorText),
      input: clsx(s.input, search && s.search, error && s.error),
    }

    return (
      <div className={className}>
        {label && (
          <Label className={`${disabled ? s.disabled : ''}`} htmlFor={'input'}>
            {label}
          </Label>
        )}
        <div className={classNames.container}>
          {search && (
            <div className={s.searchButton}>
              <Button disabled={disabled} variant={'icon'}>
                <Search />
              </Button>
            </div>
          )}
          <input
            className={classNames.input}
            disabled={disabled}
            id={'input'}
            onChange={handleChange}
            ref={ref}
            type={passwordVisible ? 'text' : 'password'}
            {...rest}
          />
          {password && (
            <Button
              className={s.eye}
              disabled={disabled}
              onClick={() => setPasswordVisible(prev => !prev)}
              variant={'icon'}
            >
              {passwordVisible ? (
                <Eye fill={disabled ? '#4c4c4c' : '#fff'} />
              ) : (
                <EyeOff fill={disabled ? '#4c4c4c' : '#fff'} />
              )}
            </Button>
          )}
          {search && rest.value && (
            <div className={s.close}>
              <Button disabled={disabled} onClick={() => onValueChange?.('')} variant={'icon'}>
                <Close fill={'#fff'} />
              </Button>
            </div>
          )}
          {error && (
            <Typography className={classNames.errorText} variant={'caption'}>
              {error}
            </Typography>
          )}
        </div>
      </div>
    )
  }
)
