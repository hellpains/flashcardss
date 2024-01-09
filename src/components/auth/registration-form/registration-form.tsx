import { useForm } from 'react-hook-form'

import { Button, Card, Typography } from '@/components'
import { ControlledTextField } from '@/components/controlled/controlled-text-field/controlled-text-field'
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

export const RegistrationForm = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(registrationSchema),
  })

  return (
    <>
      <DevTool control={control} />
      <Card className={s.container}>
        <Typography className={s.title} variant={'large'}>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputs}>
            <ControlledTextField control={control} label={'Email'} name={'email'} />
            <ControlledTextField control={control} label={'Password'} name={'password'} password />
            <ControlledTextField
              control={control}
              label={'Confirm Password'}
              name={'confirmPassword'}
              password
            />
          </div>
          <Button fullWidth type={'submit'}>
            Sign Up
          </Button>
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
