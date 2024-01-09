import { Email } from '@/assets/icons'
import { Button, Card, Typography } from '@/components'

import s from './check-email.module.scss'

export const CheckEmail = () => {
  return (
    <Card className={s.container}>
      <Typography className={s.title} variant={'large'}>
        Check Email
      </Typography>
      <div className={s.svg}>
        <Email />
      </div>
      <Typography className={s.text} variant={'body2'}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button className={s.button} fullWidth>
        Back to Sign In
      </Button>
    </Card>
  )
}
