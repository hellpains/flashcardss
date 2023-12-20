import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Close, Eye, EyeOff, Search } from '@/assets/icons'

import s from './text-field.module.scss'

import { Button } from '../button'

type TextFieldProps = {
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

    return (
      <div className={s.container}>
        <span className={`${s.label} ${disabled ? s.disabled : ''}`}>{label}</span>
        {search && (
          <div className={s.searchButton}>
            <Button disabled={disabled} variant={'icon'}>
              <Search />
            </Button>
          </div>
        )}
        <input
          className={`${className} ${s.input} ${search && s.search} ${error ? s.error : ''}`}
          disabled={disabled}
          onChange={handleChange}
          ref={ref}
          type={passwordVisible ? 'text' : 'password'}
          {...rest}
        />
        {password && (
          <div className={s.eye}>
            <Button
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
          </div>
        )}
        {search && rest.value && (
          <div className={s.close}>
            <Button disabled={disabled} onClick={() => onValueChange?.('')} variant={'icon'}>
              <Close fill={'#fff'} />
            </Button>
          </div>
        )}
        {error && <span className={s.errorText}>{error}</span>}
      </div>
    )
  }
)
