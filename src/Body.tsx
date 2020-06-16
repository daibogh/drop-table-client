import React from 'react'
import loadable from '@loadable/component'
import { Switch, Route } from 'react-router-dom'

const HomeRoute = loadable(() => import('./routes/HomeRoute'))
const AnotherRoute = loadable(() => import('./routes/AnotherRoute'))
const Body: React.FC = () => (
  <Switch>
    <Route exact path="/" component={HomeRoute} />
    <Route exact path="/another" component={AnotherRoute} />
    <Route path="/" render={() => <div>404 - not found</div>} />
  </Switch>
)

export default Body
