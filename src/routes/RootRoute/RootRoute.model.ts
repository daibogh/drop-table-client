import { declareAtom, combine } from '@reatom/core'

const testAtom = declareAtom<string>('hello world!', () => [])
const testAtom2 = declareAtom<string>('hello world!', () => [])

export const rootAtom = combine('rootAtom', { testAtom, testAtom2 })
