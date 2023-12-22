import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'

export function App() {
  return (
    <div>
      <Card style={{ height: '300px', padding: '20px', width: '400px' }}>
        hello
        <Checkbox label={'Checkbox'} />
      </Card>
    </div>
  )
}
