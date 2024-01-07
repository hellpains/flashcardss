import { useForm } from 'react-hook-form'

import { Button, Card, TextField, Typography } from '@/components'
import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox/controlled-checkbox'
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
export const LoginForm = () => {
  const { control, formState, handleSubmit, register } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <>
      <DevTool control={control} />
      <Card className={s.card}>
        <Typography as={'h1'} className={s.title} variant={'large'}>
          Sign In
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputs}>
            <TextField
              {...register('email')}
              error={formState.errors.email?.message}
              label={'Email'}
            />
            <TextField
              password
              {...register('password')}
              error={formState.errors.password?.message}
              label={'Password'}
            />
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
