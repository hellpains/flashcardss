import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './label.module.scss'
type LabelProps<T extends ElementType = 'span'> = {
  as?: T
  className?: string
} & ComponentPropsWithoutRef<T>

export const Label = <T extends ElementType = 'span'>(
  props: LabelProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof LabelProps<T>>
) => {
  const { as: Component = 'span', className, ...rest } = props

  return <Component className={`${s.label} ${className}`} {...rest} />
}
