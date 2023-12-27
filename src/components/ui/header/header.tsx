import { Logo, Logout, Person } from '@/assets/icons'
import { Avatar, Button, Typography } from '@/components'

import s from './header.module.scss'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../drop-down-menu/Index'

type HeaderProps = {
  isLogin?: boolean
}
export const Header = ({ isLogin }: HeaderProps) => {
  const userName = 'hellpains'
  const avatar =
    'https://img.freepik.com/premium-vector/brunette-man-avatar-portrait-young-guy-vector-illustration-face_217290-1035.jpg?w=2000'
  const userMail = 'hellpains@mail.com'

  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.logo}>
          <Logo />
          flashcards
        </div>
        {isLogin && (
          <div className={s.user}>
            <Typography className={s.username} variant={'subtitle1'}>
              {userName}
            </Typography>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar src={avatar} username={userName} />
              </DropdownMenuTrigger>

              <DropdownMenuContent align={'end'} alignOffset={0} sideOffset={8}>
                <DropdownMenuItem>
                  <div className={s.userInfo}>
                    <Avatar src={avatar} username={userName} />
                    <div className={s.nameAndMail}>
                      <Typography className={s.username} variant={'subtitle2'}>
                        {userName}
                      </Typography>
                      <Typography className={s.userMail} variant={'caption'}>
                        {userMail}
                      </Typography>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Typography className={s.button} variant={'caption'}>
                    <Person fill={'white'} />
                    My Profile
                  </Typography>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Typography className={s.button} variant={'caption'}>
                    <Logout fill={'white'} />
                    Sign Out
                  </Typography>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
        {!isLogin && <Button>Sign In</Button>}
      </div>
    </div>
  )
}
