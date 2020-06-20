import loadable from '@loadable/component'
import { RouteComponent } from '~/libs/ssr/createPage'
import { AddDepartmentRouteProps } from './AddDepartmentRoute'
export const AddDepartmentRouteUniversal = loadable(() =>
  import('./AddDepartmentRoute')
) as RouteComponent<AddDepartmentRouteProps>
