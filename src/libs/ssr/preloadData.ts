import { call } from '../reatom-toolkit'
import { Store } from '@reatom/core'

export async function preloadData(pages: any[], store: Store) {
  await Promise.all(
    pages.map(async ([component, match]) => {
      if (component.model) {
        store.subscribe(component.model, () => undefined)
      }
      if (component.getInitialData) {
        await component.getInitialData(call.bind(null, store), match)
      }
    })
  )
}
