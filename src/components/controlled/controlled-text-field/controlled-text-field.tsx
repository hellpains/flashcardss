import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, 'onChange' | 'value'>

export const ControlledTextField = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  rules,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, value, ...field },
    fieldState: { error },
  } = useController({ control, defaultValue, disabled, name, rules, shouldUnregister })

  return <TextField {...rest} {...field} error={error?.message} onChange={onChange} value={value} />
}
