import { useEffect } from 'react'
import { combine, declareAction, declareAtom } from '@reatom/core'
import { useAction, useAtom } from '@reatom/react'
import { getFetcher } from '~/api/fetchers'


const load{{pascalCase name}}Success = declareAction<any>()
export const load{{pascalCase name}}Actions = declareAction(async (_, { dispatch }) => {
  const { data } = await new Promise((resolve) => resolve({hello:'world'} as any))
  dispatch(load{{pascalCase name}}Success(data))
})

const isLoading = declareAtom(['{{pascalCase name}}State loading'], false, (on) => [
  on(load{{pascalCase name}}Actions, () => true),
  on(load{{pascalCase name}}Success, () => false),
])

const state{{pascalCase name}} = declareAtom(['state{{pascalCase name}}'], [] as any[], (on) => [
  on(load{{pascalCase name}}Actions, () => []),
  on(load{{pascalCase name}}Success, (state, payload) => payload),
])

export const pageAtom{{pascalCase name}} = combine(['pageAtom{{pascalCase name}}'], {
  isLoading,
  state{{pascalCase name}},
})

export function use{{pascalCase name}}() {
  const load = useAction(load{{pascalCase name}}Actions, [])
  const data = useAtom(pageAtom{{pascalCase name}})

  useEffect(() => {
    if (!data.state{{pascalCase name}}) {
      load()
    }
  }, [])

  return data
}
