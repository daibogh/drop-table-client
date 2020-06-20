import React from 'react'
import { createPage } from '../../libs/ssr/createPage'
import {
  pageAtomStatisticsRoute,
  loadStatisticsRouteActions,
  useStatisticsRoute,
} from './StatisticsRoute.model'
import { Helmet } from 'react-helmet-async'
import SEOTextContainer from '../../containers/SEOTextContainer'
import { Store, getState } from '@reatom/core'
import { Page } from '~/components/shared/page/Page'
import { ResultPage } from '~/components/ResultPage'
export interface StatisticsRouteProps {}
const StatisticsRoute: React.FC<StatisticsRouteProps> = () => {
  const posts = useStatisticsRoute()
  return <Page title="Статистика"><ResultPage></ResultPage></Page>
}

export default createPage(StatisticsRoute, {
  model: pageAtomStatisticsRoute,
  getInitialData: (dispatch: any) => dispatch(loadStatisticsRouteActions()),
  // eslint-disable-next-line react/display-name
  renderMetaTags: async (url: string, getStore: () => Promise<Store>) => {
    const data = getState(
      (await getStore()).getState(),
      pageAtomStatisticsRoute
    ) // использовать в случае, когда seo данные нуждаются в side effects
    return (
      <Helmet>
        {SEOTextContainer({
          title: 'StatisticsRouteActions title',
          description: `StatisticsRouteActions description`,
        })}
      </Helmet>
    )
  },
})
