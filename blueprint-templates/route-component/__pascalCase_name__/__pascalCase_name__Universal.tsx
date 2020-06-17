import loadable from '@loadable/component'
import { RouteComponent } from '~/libs/ssr/createPage'
import { {{pascalCase name}}Props } from './{{pascalCase name}}'
export const {{pascalCase name}}Universal = loadable(() => import('./{{pascalCase name}}')) as RouteComponent<{{pascalCase name}}Props>

