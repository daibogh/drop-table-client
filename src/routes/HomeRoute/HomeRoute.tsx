import React from 'react'
import { Button } from 'reactstrap'
import { counterAtom, increment, decrement } from '../../stores/counter'
import { useAtom, useAction } from '@reatom/react'

const HomeRoute: React.FC = () => {
  const atomValue = useAtom(counterAtom)
  const inc = useAction(increment)
  const dec = useAction(decrement)
  return (
    <>
      <Button color="primary" onClick={inc}>
        click to increment
      </Button>
      <Button color="danger" onClick={dec}>
        click to decrement
      </Button>
      <div>the value is {atomValue}</div>
    </>
  )
}

export default HomeRoute