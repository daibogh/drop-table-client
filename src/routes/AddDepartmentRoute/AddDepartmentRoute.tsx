import React from 'react'
import { createPage } from '../../libs/ssr/createPage'
import { pageAtomAddDepartmentRoute, loadAddDepartmentRouteActions, useAddDepartmentRoute } from './AddDepartmentRoute.model'
import { Helmet } from 'react-helmet-async'
import SEOTextContainer from '../../containers/SEOTextContainer'
import { Store, getState } from '@reatom/core'
export interface AddDepartmentRouteProps {}
const AddDepartmentRoute: React.FC<AddDepartmentRouteProps> = () => {
  const posts = useAddDepartmentRoute()
  return (
    <div className="AddDepartmentRoute">
      AddDepartmentRoute
    </div>
  )
}

export default createPage(AddDepartmentRoute, {
  model: pageAtomAddDepartmentRoute,
  getInitialData: (dispatch: any) => dispatch(loadAddDepartmentRouteActions()),
  // eslint-disable-next-line react/display-name
  renderMetaTags: async (url: string, getStore: () => Promise<Store>) => {
    const data = getState((await getStore()).getState(), pageAtomAddDepartmentRoute) // использовать в случае, когда seo данные нуждаются в side effects
    return (
      <Helmet>
        {SEOTextContainer({
          title: 'AddDepartmentRouteActions title',
          description: `AddDepartmentRouteActions description`,
        })}
      </Helmet>
    )
  },
})