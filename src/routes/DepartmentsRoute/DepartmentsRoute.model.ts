import { useEffect } from 'react'
import { combine, declareAction, declareAtom } from '@reatom/core'
import { useAction, useAtom } from '@reatom/react'
import { getFetcher, fetcher } from '~/api/fetchers'


const loadDepartmentsRouteSuccess = declareAction<any>()
export const loadDepartmentsRouteActions = declareAction(async (_, { dispatch }) => {
  const data  = await getFetcher('/api/program')
  dispatch(loadDepartmentsRouteSuccess(data))
})

const isLoading = declareAtom(['DepartmentsRouteState loading'], false, (on) => [
  on(loadDepartmentsRouteActions, () => true),
  on(loadDepartmentsRouteSuccess, () => false),
])

const stateDepartmentsRoute = declareAtom(['stateDepartmentsRoute'], [] as any[], (on) => [
  on(loadDepartmentsRouteActions, () => ({} as any)),
  on(loadDepartmentsRouteSuccess, (state, payload) => payload),
])

export const pageAtomDepartmentsRoute = combine(['pageAtomDepartmentsRoute'], {
  isLoading,
  stateDepartmentsRoute,
})

export function useDepartmentsRoute() {
  const load = useAction(loadDepartmentsRouteActions, [])
  const data = useAtom(pageAtomDepartmentsRoute)

  useEffect(() => {
    if (!data.stateDepartmentsRoute) {
      load()
    }
  }, [])

  return data
}
