import { useEffect } from 'react'
import { combine, declareAction, declareAtom } from '@reatom/core'
import { useAction, useAtom } from '@reatom/react'
import { getFetcher } from '~/api/fetchers'

const loadStatisticsRouteSuccess = declareAction<any>()
export const loadStatisticsRouteActions = declareAction(
  async (_, { dispatch }) => {
    const { data } = await new Promise((resolve) =>
      resolve({ hello: 'world' } as any)
    )
    dispatch(loadStatisticsRouteSuccess(data))
  }
)

const isLoading = declareAtom(['StatisticsRouteState loading'], false, (on) => [
  on(loadStatisticsRouteActions, () => true),
  on(loadStatisticsRouteSuccess, () => false),
])

const stateStatisticsRoute = declareAtom(
  ['stateStatisticsRoute'],
  [] as any[],
  (on) => [
    on(loadStatisticsRouteActions, () => []),
    on(loadStatisticsRouteSuccess, (state, payload) => payload),
  ]
)

export const pageAtomStatisticsRoute = combine(['pageAtomStatisticsRoute'], {
  isLoading,
  stateStatisticsRoute,
})

export function useStatisticsRoute() {
  const load = useAction(loadStatisticsRouteActions, [])
  const data = useAtom(pageAtomStatisticsRoute)

  useEffect(() => {
    if (!data.stateStatisticsRoute) {
      load()
    }
  }, [])

  return data
}
