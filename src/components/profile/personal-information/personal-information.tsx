import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Edit, Logout } from '@/assets/icons'
import { Avatar, Button, Card, ControlledTextField, Typography } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './personal-information.module.scss'

const personalInformationSchema = z.object({
  name: z.string().min(3),
})

type FormValues = z.infer<typeof personalInformationSchema>

export const PersonalInformation = () => {
  const [editableName, setEditableName] = useState(false)
  const [name, setName] = useState('hellpains')
  const email = 'rustam2004sadulaev@mail.ru'
  const image =
    'https://img.freepik.com/free-photo/3d-rendering-of-zoom-call-avatar_23-2149556777.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1701648000&semt=ais'

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name,
    },
    mode: 'onSubmit',
    resolver: zodResolver(personalInformationSchema),
  })

  const changeName = (values: FormValues) => {
    console.log(values.name)
    setName(values.name)
    setEditableName(false)
  }

  return (
    <Card className={s.container}>
      <Typography className={s.title} variant={'large'}>
        Personal Information
      </Typography>
      <div className={s.avatarContainer}>
        <Avatar className={s.avatar} src={image} />
        <Button className={s.buttonAvatar} variant={'icon'}>
          <Edit />
        </Button>
      </div>
      {!editableName && (
        <>
          <div className={s.name}>
            {name}
            <Button onClick={() => setEditableName(prev => !prev)} variant={'icon'}>
              <Edit />
            </Button>
          </div>
          <div className={s.email}>{email}</div>
          <Button className={s.button} variant={'secondary'}>
            <Logout fill={'#fff'} /> Logout
          </Button>
        </>
      )}
      {editableName && (
        <form onSubmit={handleSubmit(changeName)}>
          <div className={s.input}>
            <ControlledTextField control={control} label={'Nickname'} name={'name'} />
          </div>
          <Button className={s.buttonSaveChanges} fullWidth type={'submit'}>
            Save Changes
          </Button>
        </form>
      )}
    </Card>
  )
}
