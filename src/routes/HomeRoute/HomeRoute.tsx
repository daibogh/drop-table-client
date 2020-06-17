import React from 'react'
import { Button } from 'reactstrap'
import { counterAtom, increment, decrement } from '../../stores/counter'
import { useAtom, useAction } from '@reatom/react'
import { createPage } from '../../libs/ssr/createPage'
import { postsPageAtom, loadPostsActions, usePosts } from './HomeRoute.model'
import { Helmet } from 'react-helmet-async'
import SEOTextContainer from '../../containers/SEOTextContainer'
import { Store, getState } from '@reatom/core'
import { TREE } from '@reatom/core/build/shared'
import { rootAtom } from '../RootRoute/RootRoute.model'

const HomeRoute: React.FC = () => {
  const posts = usePosts()
  const value = useAtom(rootAtom).testAtom
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
      <Button>{value}</Button>
    </>
  )
}

export default createPage(HomeRoute, {
  model: postsPageAtom,getInitialData: (dispatch:any) => dispatch(loadPostsActions()),
  // eslint-disable-next-line react/display-name
  renderMetaTags: async (url: string, getStore: () => Promise<Store>) => {
    const data = getState((await getStore()).getState(),postsPageAtom)
    return <Helmet>{SEOTextContainer({title:'home page',description:`get new info from localhost! there is ${data?.postsList.length} new posts`})}</Helmet>
  }
})