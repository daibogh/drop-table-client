import { useEffect } from 'react'
import { combine, declareAction, declareAtom } from '@reatom/core'
import { useAction, useAtom } from '@reatom/react'
import { getFetcher } from '~/api/fetchers'

const loadCreateRouteSuccess = declareAction<any>()
export const loadCreateRouteActions = declareAction(async (_, { dispatch }) => {
  const { data } = await new Promise((resolve) =>
    resolve({ hello: 'world' } as any)
  )
  dispatch(loadCreateRouteSuccess(data))
})

const isLoading = declareAtom(['CreateRouteState loading'], false, (on) => [
  on(loadCreateRouteActions, () => true),
  on(loadCreateRouteSuccess, () => false),
])

const stateCreateRoute = declareAtom(
  ['stateCreateRoute'],
  [] as any[],
  (on) => [
    on(loadCreateRouteActions, () => []),
    on(loadCreateRouteSuccess, (state, payload) => payload),
  ]
)

export const pageAtomCreateRoute = combine(['pageAtomCreateRoute'], {
  isLoading,
  stateCreateRoute,
})

export function useCreateRoute() {
  const load = useAction(loadCreateRouteActions, [])
  const data = useAtom(pageAtomCreateRoute)

  useEffect(() => {
    if (!data.stateCreateRoute) {
      load()
    }
  }, [])

  return data
}
