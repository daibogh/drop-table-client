import React from 'react'
import { Button } from 'reactstrap'
import { counterAtom, increment, decrement } from '../../stores/counter'
import { useAtom, useAction } from '@reatom/react'
import { createPage } from '../../libs/ssr/createPage'
import { postsPageAtom, loadPostsActions, usePosts } from './HomeRoute.model'
import { Helmet } from 'react-helmet-async'
import SEOTextContainer from '../../containers/SEOTextContainer'
import { Store, getState } from '@reatom/core'
import { rootAtom } from '../RootRoute/RootRoute.model'
import { Link } from 'react-router-dom'
import { Page } from '~/components/shared/page/Page'

const HomeRoute: React.FC = () => {
  const { isLoading, postsList } = usePosts()
  const value = useAtom(rootAtom).testAtom
  const atomValue = useAtom(counterAtom)
  const inc = useAction(() => increment())
  const dec = useAction(() => decrement())
  if (isLoading) {
    return <>...</>
  }
  if (!postsList) {
    return <>no data...</>
  }
  return (
    <>
      <Page title="Список образовательных программ"></Page>
    </>
  )
}

export default createPage(HomeRoute, {
  model: postsPageAtom,
  getInitialData: (dispatch: any) => dispatch(loadPostsActions()),
  // eslint-disable-next-line react/display-name
  renderMetaTags: async (url: string, getStore: () => Promise<Store>) => {
    const data = getState((await getStore()).getState(), postsPageAtom)
    return (
      <Helmet>
        {SEOTextContainer({
          title: 'home page',
          description: `get new info from localhost! there is ${data?.postsList.length} new posts`,
        })}
      </Helmet>
    )
  },
})
