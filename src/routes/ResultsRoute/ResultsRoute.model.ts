import { useEffect } from 'react'
import { combine, declareAction, declareAtom } from '@reatom/core'
import { useAction, useAtom } from '@reatom/react'
import { getFetcher } from '~/api/fetchers'

const loadResultsRouteSuccess = declareAction<any>()
export const loadResultsRouteActions = declareAction(
  async (_, { dispatch }) => {
    const { data } = await new Promise((resolve) =>
      resolve({ hello: 'world' } as any)
    )
    dispatch(loadResultsRouteSuccess(data))
  }
)

const isLoading = declareAtom(['ResultsRouteState loading'], false, (on) => [
  on(loadResultsRouteActions, () => true),
  on(loadResultsRouteSuccess, () => false),
])

const stateResultsRoute = declareAtom(
  ['stateResultsRoute'],
  [] as any[],
  (on) => [
    on(loadResultsRouteActions, () => []),
    on(loadResultsRouteSuccess, (state, payload) => payload),
  ]
)

export const pageAtomResultsRoute = combine(['pageAtomResultsRoute'], {
  isLoading,
  stateResultsRoute,
})

export function useResultsRoute() {
  const load = useAction(loadResultsRouteActions, [])
  const data = useAtom(pageAtomResultsRoute)

  useEffect(() => {
    if (!data.stateResultsRoute) {
      load()
    }
  }, [])

  return data
}
