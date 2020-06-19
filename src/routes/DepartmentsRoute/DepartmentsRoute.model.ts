import { useEffect } from 'react'
import { combine, declareAction, declareAtom } from '@reatom/core'
import { useAction, useAtom } from '@reatom/react'
import { getFetcher } from '~/api/fetchers'


const loadDepartmentsRouteSuccess = declareAction<any>()
export const loadDepartmentsRouteActions = declareAction(async (_, { dispatch }) => {
  const { data } = await new Promise((resolve) => resolve({hello:'world'} as any))
  dispatch(loadDepartmentsRouteSuccess(data))
})

const isLoading = declareAtom(['DepartmentsRouteState loading'], false, (on) => [
  on(loadDepartmentsRouteActions, () => true),
  on(loadDepartmentsRouteSuccess, () => false),
])

const stateDepartmentsRoute = declareAtom(['stateDepartmentsRoute'], [] as any[], (on) => [
  on(loadDepartmentsRouteActions, () => []),
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
