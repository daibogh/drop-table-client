import { useEffect } from 'react'
import { combine, declareAction, declareAtom } from '@reatom/core'
import { useAction, useAtom } from '@reatom/react'
import { getFetcher } from '~/api/fetchers'


const loadAddDepartmentRouteSuccess = declareAction<any>()
export const loadAddDepartmentRouteActions = declareAction(async (_, { dispatch }) => {
  const { data } = await new Promise((resolve) => resolve({hello:'world'} as any))
  dispatch(loadAddDepartmentRouteSuccess(data))
})

const isLoading = declareAtom(['AddDepartmentRouteState loading'], false, (on) => [
  on(loadAddDepartmentRouteActions, () => true),
  on(loadAddDepartmentRouteSuccess, () => false),
])

const stateAddDepartmentRoute = declareAtom(['stateAddDepartmentRoute'], [] as any[], (on) => [
  on(loadAddDepartmentRouteActions, () => []),
  on(loadAddDepartmentRouteSuccess, (state, payload) => payload),
])

export const pageAtomAddDepartmentRoute = combine(['pageAtomAddDepartmentRoute'], {
  isLoading,
  stateAddDepartmentRoute,
})

export function useAddDepartmentRoute() {
  const load = useAction(loadAddDepartmentRouteActions, [])
  const data = useAtom(pageAtomAddDepartmentRoute)

  useEffect(() => {
    if (!data.stateAddDepartmentRoute) {
      load()
    }
  }, [])

  return data
}
