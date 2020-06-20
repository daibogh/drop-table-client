import loadable from '@loadable/component'
import { RouteComponent } from '~/libs/ssr/createPage'
import { StatisticsRouteProps } from './StatisticsRoute'
export const StatisticsRouteUniversal = loadable(() =>
  import('./StatisticsRoute')
) as RouteComponent<StatisticsRouteProps>
