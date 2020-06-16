import { HomeRoute } from "./routes/HomeRoute"
import { AnotherRoute } from "./routes/AnotherRoute"

export const routes = [
  {
    path: "/child/:id?",
    exact: true,
    component: AnotherRoute,
  },
  {
    path: "/",
    component: HomeRoute
  }
]