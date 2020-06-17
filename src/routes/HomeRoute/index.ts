import loadable from '@loadable/component'
import { RouteComponent } from '../../libs/ssr/createPage'

export const HomeRoute = loadable(() =>
  import('./HomeRoute')
) as RouteComponent<null>
