import loadable from '@loadable/component'
import { RouteComponent } from '../../libs/ssr/createPage'

export const RootRoute = loadable(() => import('./RootRoute')) as RouteComponent<null>