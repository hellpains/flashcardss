import { Header } from '@/components'

import { LoginForm } from './components/auth/login-form/login-form'

export function App() {
  return (
    <div>
      <Header isLogin />
      <LoginForm />
    </div>
  )
}
