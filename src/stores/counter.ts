import { declareAction, declareAtom, map, combine } from '@reatom/core'

export const increment = declareAction()
export const decrement = declareAction()
export const counterAtom = declareAtom(0, (on) => [
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
])
