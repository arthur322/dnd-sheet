import { globalStyles } from '@config/stitches.config'
import { CharSheet } from '@modules/sheet/components'

export const App = () => {
  globalStyles()

  return (
    <main>
      <CharSheet />
    </main>
  )
}
