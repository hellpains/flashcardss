import { useState } from 'react'

import { Header, TextField } from '@/components'
import { RegistrationForm } from '@/components/auth/registration-form/registration-form'

export function App() {
  const onSubmit = (values: { email: string; password: string }) => {
    console.log(values.email, values.password)
  }
  const [value, setValue] = useState('')

  return (
    <div>
      <Header isLogin />
      {/*<RegistrationForm onSubmit={onSubmit} />*/}
      <div style={{ margin: '500px', width: '400px' }}>
        <TextField
          label={'sdf'}
          onChange={e => setValue(e.currentTarget.value)}
          password
          value={value}
        />
      </div>
    </div>
  )
}
