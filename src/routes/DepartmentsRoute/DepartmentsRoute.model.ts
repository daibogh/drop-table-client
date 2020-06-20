import { useEffect } from 'react'
import { combine, declareAction, declareAtom } from '@reatom/core'
import { useAction, useAtom } from '@reatom/react'
import { getFetcher, fetcher } from '~/api/fetchers'
import { components } from '~/api/types'

const loadDepartmentsRouteSuccess = declareAction<
  DT<components['schemas']['ProgramSchema']>
>()
export const loadDepartmentsRouteActions = declareAction(
  async (_: any, { dispatch }: any) => {
    const data = await getFetcher<DT<components['schemas']['ProgramSchema']>>(
      '/api/program'
    )
    dispatch(loadDepartmentsRouteSuccess(data))
  }
)

const isLoading = declareAtom(
  ['DepartmentsRouteState loading'],
  false,
  (on) => [
    on(loadDepartmentsRouteActions, () => true),
    on(loadDepartmentsRouteSuccess, () => false),
  ]
)

const stateDepartmentsRoute = declareAtom<DT<
  components['schemas']['ProgramSchema']
> | null>(['stateDepartmentsRoute'], null, (on) => [
  on(loadDepartmentsRouteActions, () => null),
  on(
    loadDepartmentsRouteSuccess,
    (state, payload: DT<components['schemas']['ProgramSchema']>) => payload
  ),
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
