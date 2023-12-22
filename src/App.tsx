import { useState } from 'react'

import { Card } from '@/components/ui/card'
import { Select } from '@/components/ui/select'

export function App() {
  const [value, setValue] = useState('value2')

  return (
    <div>
      <Card style={{ height: '300px', padding: '20px', width: '1200px' }}>
        hello
        <div style={{ width: '400px' }}>
          <Select defaultOpen onValueChange={setValue} options={options} value={value} />
        </div>
      </Card>
    </div>
  )
}

const options = [
  { title: 'Value1', value: 'value1' },
  { title: 'Value2', value: 'value2' },
  { title: 'Value3', value: 'value3' },
]
