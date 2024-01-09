import { useForm } from 'react-hook-form'

import { Button, Card, TextField, Typography } from '@/components'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './registration-form.module.scss'

const registrationSchema = z
  .object({
    confirmPassword: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(3),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords dont match',
    path: ['confirmPassword'],
  })

type FormValues = z.infer<typeof registrationSchema>

type Props = {
  onSubmit: (data: FormValues) => void
}
export const RegistrationForm = (props: Props) => {
  const { control, formState, handleSubmit, register } = useForm<FormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(registrationSchema),
  })

  const handleOnSubmit = handleSubmit(props.onSubmit)

  return (
    <>
      <DevTool control={control} />
      <Card className={s.container}>
        <Typography className={s.title} variant={'large'}>
          Sign Up
        </Typography>
        <form onSubmit={handleOnSubmit}>
          <div className={s.inputs}>
            <TextField
              label={'Email'}
              {...register('email')}
              error={formState.errors.email?.message}
            />
            <TextField
              label={'Password'}
              password
              {...register('password')}
              error={formState.errors.password?.message}
            />
            <TextField
              label={'Confirm Password'}
              password
              {...register('confirmPassword')}
              error={formState.errors.confirmPassword?.message}
            />
          </div>
          <Button fullWidth>Submit</Button>
        </form>
        <Typography className={s.text} variant={'body2'}>
          Already have an account?
        </Typography>
        <Button className={s.link} variant={'link'}>
          Sign In
        </Button>
      </Card>
    </>
  )
}
