import loadable from '@loadable/component'
import { RouteComponent } from '~/libs/ssr/createPage'
import { DepartmentsRouteProps } from './DepartmentsRoute'
export const DepartmentsRouteUniversal = loadable(() =>
  import('./DepartmentsRoute')
) as RouteComponent<DepartmentsRouteProps>
