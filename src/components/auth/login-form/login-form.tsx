import { useForm } from 'react-hook-form'

import { Button, Card, Typography } from '@/components'
import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledTextField } from '@/components/controlled/controlled-text-field/controlled-text-field'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './login-form.module.scss'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional(),
})

type FormValues = z.infer<typeof loginSchema>
export const LoginForm = ({ onSubmit }: { onSubmit: (values: FormValues) => void }) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
  })

  return (
    <>
      <DevTool control={control} />
      <Card className={s.card}>
        <Typography as={'h1'} className={s.title} variant={'large'}>
          Sign In
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputs}>
            <ControlledTextField control={control} label={'Email'} name={'email'} />
            <ControlledTextField control={control} label={'Password'} name={'password'} password />
          </div>
          <div className={s.rememberMe}>
            <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
          </div>
          <Typography className={s.forgotText} variant={'body2'}>
            Forgot Password?
          </Typography>
          <Button className={s.button} fullWidth type={'submit'}>
            Sign In
          </Button>
        </form>
        <Typography as={'div'} className={s.text} variant={'body2'}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Don't have an account?
        </Typography>
        <Button className={s.link} variant={'link'}>
          Sign Up
        </Button>
      </Card>
    </>
  )
}
