import { CheckEmail, Header, PersonalInformation } from '@/components'
import { NewPassword } from '@/components/auth/new-password'

export function App() {
  const onSubmit = (values: { password: string }) => {
    console.log(values.password)
  }

  return (
    <div>
      <Header isLogin />
      <PersonalInformation />
    </div>
  )
}
