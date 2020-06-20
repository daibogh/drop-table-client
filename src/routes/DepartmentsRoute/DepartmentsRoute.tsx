import React from 'react'
import { createPage } from '../../libs/ssr/createPage'
import {
  pageAtomDepartmentsRoute,
  loadDepartmentsRouteActions,
  useDepartmentsRoute,
} from './DepartmentsRoute.model'
import { Helmet } from 'react-helmet-async'
import SEOTextContainer from '../../containers/SEOTextContainer'
import { Store, getState } from '@reatom/core'
import { Graph } from 'react-d3-graph'

// graph payload (with minimalist structure)
const data = {
  nodes: [
    { id: 'Harry', fixed: false },
    { id: 'Sally', fixed: false },
    { id: 'Alice', fixed: false },
    { id: 'Peter', fixed: false },
    { id: 'Вася', fixed: false },
    { id: 'Настя', fixed: false },
    { id: 'Аня', fixed: false },
    { id: 'Игорь', fixed: false },
    { id: 'Sam', fixed: false },
    { id: 'Derek', fixed: false },
  ],
  links: [
    { source: 'Harry', target: 'Sally' },
    { source: 'Harry', target: 'Alice' },
  ],
}
// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
  nodeHighlightBehavior: true,
  node: {
    color: 'lightgreen',
    size: 120,
    highlightStrokeColor: 'blue',
  },
  link: {
    highlightColor: 'lightblue',
  },
}

export interface DepartmentsRouteProps {}
const DepartmentsRoute: React.FC<DepartmentsRouteProps> = () => {
  const _data = useDepartmentsRoute()
  console.log({ _data })
  return (
    <div className="DepartmentsRoute">
      <Graph
        id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
        data={data}
        config={myConfig}
        // onClickGraph={onClickGraph}
        // onClickNode={onClickNode}
        // onDoubleClickNode={onDoubleClickNode}
        // onRightClickNode={onRightClickNode}
        // onClickLink={onClickLink}
        // onRightClickLink={onRightClickLink}
        // onMouseOverNode={onMouseOverNode}
        // onMouseOutNode={onMouseOutNode}
        // onMouseOverLink={onMouseOverLink}
        // onMouseOutLink={onMouseOutLink}
      />
    </div>
  )
}

export default createPage(DepartmentsRoute, {
  model: pageAtomDepartmentsRoute,
  getInitialData: (dispatch: any) => dispatch(loadDepartmentsRouteActions()),
  // eslint-disable-next-line react/display-name
  renderMetaTags: async (url: string, getStore: () => Promise<Store>) => {
    const data = getState(
      (await getStore()).getState(),
      pageAtomDepartmentsRoute
    ) // использовать в случае, когда seo данные нуждаются в side effects
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
