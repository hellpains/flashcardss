import { useState } from 'react'

import { TextField } from '@/components/ui/text-field'

export function App() {
  const [value, setValue] = useState('wefwef')

  return (
    <div>
      <div style={{ width: '900px' }}>
        <TextField
          error={'ERROR!!!'}
          label={'Input'}
          onValueChange={setValue}
          placeholder={'Input'}
          search
          value={value}
        />
      </div>
    </div>
  )
}
