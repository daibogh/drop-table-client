import { MatchedRoute, RouteConfig } from "react-router-config"

export function getPages(branch:MatchedRoute<any>[]) {
  return Promise.all(
    branch.map(async ({ route, match }) => {
      const component = await getComponentFromFromRoute(route)
      return [component, match]
    }),
  )
}

async function getComponentFromFromRoute(route: RouteConfig) {
  if (!route.component) return 
  const component: any = route.component
  if (typeof component?.load !== 'function') {
    return route.component
  }
  // loadable component
  const data = await component?.load()
  if (!data.default) return data
  return data.default
}