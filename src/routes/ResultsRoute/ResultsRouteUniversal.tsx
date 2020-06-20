import loadable from '@loadable/component'
import { RouteComponent } from '~/libs/ssr/createPage'
import { ResultsRouteProps } from './ResultsRoute'
export const ResultsRouteUniversal = loadable(() =>
  import('./ResultsRoute')
) as RouteComponent<ResultsRouteProps>
