import React from 'react'
import { createPage } from '../../libs/ssr/createPage'
import {
  pageAtomResultsRoute,
  loadResultsRouteActions,
  useResultsRoute,
} from './ResultsRoute.model'
import { Helmet } from 'react-helmet-async'
import SEOTextContainer from '../../containers/SEOTextContainer'
import { Store, getState } from '@reatom/core'
export interface ResultsRouteProps {}
const ResultsRoute: React.FC<ResultsRouteProps> = () => {
  const posts = useResultsRoute()
  return <div className="ResultsRoute">ResultsRoute</div>
}

export default createPage(ResultsRoute, {
  model: pageAtomResultsRoute,
  getInitialData: (dispatch: any) => dispatch(loadResultsRouteActions()),
  // eslint-disable-next-line react/display-name
  renderMetaTags: async (url: string, getStore: () => Promise<Store>) => {
    const data = getState((await getStore()).getState(), pageAtomResultsRoute) // использовать в случае, когда seo данные нуждаются в side effects
    return (
      <Helmet>
        {SEOTextContainer({
          title: 'ResultsRouteActions title',
          description: `ResultsRouteActions description`,
        })}
      </Helmet>
    )
  },
})
