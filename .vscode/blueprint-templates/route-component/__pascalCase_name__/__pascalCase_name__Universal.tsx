import loadable from '@loadable/component'
import { RouteComponent } from '~/libs/ssr/createPage'

export const {{pascalCase name}}Universal = loadable(() => import('./{{pascalCase name}}')) as RouteComponent<{{pascalCase name}}Props>

{{pascalCase name}}Universal.id = '{{pascalCase name}}'
