import { useState } from 'react'

import { Card } from '@/components/ui/card'

import { Slider } from './components/ui/slider'

export function App() {
  const [value, setValue] = useState([20, 80])

  return (
    <div>
      <Card style={{ height: '300px', padding: '20px', width: '400px' }}>
        hello
        <Slider max={112} onValueChange={setValue} value={value} />
      </Card>
    </div>
  )
}
