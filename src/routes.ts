import { HomeRoute } from './routes/HomeRoute'
import { RootRoute } from './routes/RootRoute'
import { DepartmentsRoute } from './routes/DepartmentsRoute'
import { AddDepartmentRoute } from './routes/AddDepartmentRoute'
import { ResultsRoute } from './routes/ResultsRoute'
import CreateRoute from './routes/CreateRoute/CreateRoute'
import StatisticsRoute from './routes/StatisticsRoute/StatisticsRoute'

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
        path: '/add',
        exact: true,
        component: CreateRoute,
      },
      {
        path: '/statistics',
        exact: true,
        component: StatisticsRoute,
      },
    ],
  },
]
