import { useForm } from 'react-hook-form'

import { Button, Card, Typography } from '@/components'
import { ControlledTextField } from '@/components/controlled/controlled-text-field'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './new-password.module.scss'

const newPasswordSchema = z.object({
  password: z.string().min(3),
})

type FormValues = z.infer<typeof newPasswordSchema>

export const NewPassword = ({ onSubmit }: { onSubmit: (password: FormValues) => void }) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      password: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(newPasswordSchema),
  })

  return (
    <>
      <DevTool control={control} />
      <Card className={s.container}>
        <Typography className={s.title} variant={'large'}>
          Create new password
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.input}>
            <ControlledTextField control={control} label={'Password'} name={'password'} password />{' '}
          </div>
          <Typography className={s.text} variant={'body2'}>
            Create new password and we will send you further instructions to email
          </Typography>
          <Button className={s.button} fullWidth type={'submit'}>
            Create New Password
          </Button>
        </form>
      </Card>
    </>
  )
}
