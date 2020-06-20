import loadable from '@loadable/component'
import { RouteComponent } from '~/libs/ssr/createPage'
import { CreateRouteProps } from './CreateRoute'
export const CreateRouteUniversal = loadable(() =>
  import('./CreateRoute')
) as RouteComponent<CreateRouteProps>
