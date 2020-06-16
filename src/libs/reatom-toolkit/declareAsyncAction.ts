import { declareAction } from '@reatom/core'

export function declareAsyncAction(name: string, fetcher: any) {
  const done = declareAction<any>(() =>[`${name} fetch done`])
  const fail = declareAction<any>(() => [`${name} fetch fail`])

  const fetchAction = declareAction(
    [`${name} fetch`],
    async (variables, store) => {
      try {
        const data = await fetcher(variables, store)
        store.dispatch(done(data))
        return data
      } catch (error) {
        console.error('error', error)
        store.dispatch(fail(error))
      }
    },
  ) as any

  fetchAction.done = done
  fetchAction.fail = fail

  return fetchAction
}