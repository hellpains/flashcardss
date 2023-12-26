import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './label.module.scss'
type LabelProps<T extends ElementType = 'label'> = {
  as?: T
  className?: string
} & ComponentPropsWithoutRef<T>

export const Label = <T extends ElementType = 'label'>(
  props: LabelProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof LabelProps<T>>
) => {
  const { as: Component = 'label', className, ...rest } = props

  return <Component className={`${s.label} ${className}`} {...rest} />
}
