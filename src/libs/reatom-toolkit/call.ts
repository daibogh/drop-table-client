import { Store, Action } from '@reatom/core'

// return a promise from store.dispatch
export function call(store: Store, action: Action<any>) {
  let res: any
  let rej: any

  store.dispatch({
    ...action,
    reactions: [
      async (...a) => {
        try {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          const payload = await action.reactions[0](...a)
          res(payload)
        } catch (error) {
          rej(error)
        }
      },
    ],
  })

  return new Promise((_res, _rej) => {
    res = _res
    rej = _rej
  })
}
