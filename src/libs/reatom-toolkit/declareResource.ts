import { declareAtom } from '@reatom/core'

import { declareAsyncAction } from './declareAsyncAction'

export function declareResource(
  name: any,
  initialState: any,
  fetcher: any,
  dependencyMatcher: any,
) {
  const asyncAction = declareAsyncAction(name, fetcher) as any

  const resource = declareAtom(name, initialState, on => [
    on(asyncAction.done, (_, payload) => payload),
    ...dependencyMatcher(on),
  ]) as any

  resource.isLoading = declareAtom([`${name} is loading`], false, on => [
    on(asyncAction, () => true),
    on(asyncAction.fail, () => false),
    on(asyncAction.done, () => false),
  ])

  resource.get = asyncAction

  return resource
}