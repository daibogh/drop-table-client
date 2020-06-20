import React from 'react'
import { createPage } from '../../libs/ssr/createPage'
import {
  pageAtomCreateRoute,
  loadCreateRouteActions,
  useCreateRoute,
} from './CreateRoute.model'
import { Helmet } from 'react-helmet-async'
import SEOTextContainer from '../../containers/SEOTextContainer'
import { Store, getState } from '@reatom/core'
import { Page } from '~/components/shared/page/Page'
import { ProgramPage } from '~/components/ProgramPage'
export interface CreateRouteProps {}
const CreateRoute: React.FC<CreateRouteProps> = () => {
  const posts = useCreateRoute()
  return (
    <Page title="Добавление образовательной программы">
      <ProgramPage />
    </Page>
  )
}

export default createPage(CreateRoute, {
  model: pageAtomCreateRoute,
  getInitialData: (dispatch: any) => dispatch(loadCreateRouteActions()),
  // eslint-disable-next-line react/display-name
  renderMetaTags: async (url: string, getStore: () => Promise<Store>) => {
    const data = getState((await getStore()).getState(), pageAtomCreateRoute) // использовать в случае, когда seo данные нуждаются в side effects
    return (
      <Helmet>
        {SEOTextContainer({
          title: 'CreateRouteActions title',
          description: `CreateRouteActions description`,
        })}
      </Helmet>
    )
  },
})
