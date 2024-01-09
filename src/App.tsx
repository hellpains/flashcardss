import { Header } from '@/components'
import { RegistrationForm } from '@/components/auth/registration-form/registration-form'

export function App() {
  const onSubmit = (values: { email: string; password: string }) => {
    console.log(values.email, values.password)
  }

  return (
    <div>
      <Header isLogin />
      <RegistrationForm onSubmit={onSubmit} />
    </div>
  )
}
