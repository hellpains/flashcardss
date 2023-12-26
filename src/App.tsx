import { useState } from 'react'

import { Card } from '@/components/ui/card'
import { RadioGroup } from '@/components/ui/radio-group'

export function App() {
  const [value, setValue] = useState('value2')

  return (
    <div>
      <Card style={{ height: '500px', padding: '20px', width: '1200px' }}>
        <RadioGroup
          onValueChange={setValue}
          options={[
            { title: 'Value 1', value: 'value1' },
            { title: 'Value 2', value: 'value2' },
            { title: 'Value 3', value: 'value3' },
          ]}
          value={value}
        />
      </Card>
    </div>
  )
}
