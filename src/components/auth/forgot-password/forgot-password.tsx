import { useForm } from 'react-hook-form'

import { Button, Card, Typography } from '@/components'
import { ControlledTextField } from '@/components/controlled/controlled-text-field/controlled-text-field'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './forgot-password.module.scss'

const forgotPasswordSchema = z.object({
  email: z.string().email(),
})

type FormValues = z.infer<typeof forgotPasswordSchema>
export const ForgotPasswordForm = ({ onSubmit }: { onSubmit: (values: FormValues) => void }) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(forgotPasswordSchema),
  })

  return (
    <>
      <DevTool control={control} />
      <Card className={s.container}>
        <Typography className={s.title} variant={'large'}>
          Forgot your password?
        </Typography>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.input}>
            <ControlledTextField control={control} label={'Email'} name={'email'} />
          </div>
          <Typography className={s.text1} variant={'body2'}>
            Enter your email address and we will send you further instructions{' '}
          </Typography>
          <Button className={s.button} fullWidth type={'submit'}>
            Send Instructions
          </Button>
        </form>
        <Typography className={s.text2} variant={'body2'}>
          Did you remember your password?
        </Typography>
        <Button className={s.link} variant={'link'}>
          Try logging in
        </Button>
      </Card>
    </>
  )
}
