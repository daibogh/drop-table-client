import { HomeRoute } from './routes/HomeRoute'
import { AnotherRoute } from './routes/AnotherRoute'
import { RootRoute } from './routes/RootRoute'

export const routes = [
  {
    component: RootRoute,
    routes: [
      {
        path: '/',
        exact: true,
        component: HomeRoute,
      },
      {
        path: '/child/:id?',
        exact: true,
        component: AnotherRoute,
      },
    ],
  },
]
