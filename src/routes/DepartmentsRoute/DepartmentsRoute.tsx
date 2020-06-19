import React from 'react'
import { createPage } from '../../libs/ssr/createPage'
import { pageAtomDepartmentsRoute, loadDepartmentsRouteActions, useDepartmentsRoute } from './DepartmentsRoute.model'
import { Helmet } from 'react-helmet-async'
import SEOTextContainer from '../../containers/SEOTextContainer'
import { Store, getState } from '@reatom/core'
export interface DepartmentsRouteProps {}
const DepartmentsRoute: React.FC<DepartmentsRouteProps> = () => {
  const posts = useDepartmentsRoute()
  return (
    <div className="DepartmentsRoute">
      DepartmentsRoute
    </div>
  )
}

export default createPage(DepartmentsRoute, {
  model: pageAtomDepartmentsRoute,
  getInitialData: (dispatch: any) => dispatch(loadDepartmentsRouteActions()),
  // eslint-disable-next-line react/display-name
  renderMetaTags: async (url: string, getStore: () => Promise<Store>) => {
    const data = getState((await getStore()).getState(), pageAtomDepartmentsRoute) // использовать в случае, когда seo данные нуждаются в side effects
    return (
      <Helmet>
        {SEOTextContainer({
          title: 'DepartmentsRouteActions title',
          description: `DepartmentsRouteActions description`,
        })}
      </Helmet>
    )
  },
})