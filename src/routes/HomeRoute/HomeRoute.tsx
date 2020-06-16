import React from 'react'
import { Button } from 'reactstrap'
import { counterAtom, increment, decrement } from '../../stores/counter'
import { useAtom, useAction } from '@reatom/react'
import { createPage } from '../../libs/ssr/createPage'
import { postsPageAtom, loadPostsActions, usePosts } from './HomeRoute.model'

const HomeRoute: React.FC = () => {
  const posts = usePosts()
  return (
    <>
      {/* <Button color="primary" onClick={inc}>
        click to increment
      </Button>
      <Button color="danger" onClick={dec}>
        click to decrement
      </Button>
      <div>the value is {atomValue}</div> */}
      {JSON.stringify(posts)}
    </>
  )
}

export default createPage(HomeRoute, {model: postsPageAtom,getInitialData: (dispatch:any) => dispatch(loadPostsActions())})