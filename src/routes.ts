import { HomeRoute } from './routes/HomeRoute'
import {RootRoute} from './routes/RootRoute'
import {DepartmentsRoute} from './routes/DepartmentsRoute'
import {AddDepartmentRoute} from './routes/AddDepartmentRoute'
import {ResultsRoute} from './routes/ResultsRoute'

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
        path: '/departments',
        exact: true,
        component: DepartmentsRoute,
      },
      {
        path: '/add-department',
        exact: true,
        component: AddDepartmentRoute,
      },
      {
        path: '/results',
        exact: true,
        component: ResultsRoute,
      },
      
    ],
  },
]
