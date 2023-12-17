import { Logout } from '@/assets/icons'
import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div>
      <Button title={'hello'} variant={'tertiary'}>
        <Logout fill={'fff'} />
      </Button>
    </div>
  )
}
