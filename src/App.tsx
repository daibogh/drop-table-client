import React, { useEffect } from 'react'
import loadable from '@loadable/component'

import { createStore } from '@reatom/core'
import { context } from '@reatom/react'
import { connectReduxDevtools } from '@reatom/debug'
import { renderRoutes } from 'react-router-config'
import { routes } from './routes'
import Footer from './components/Footer'

import { Sidebar } from './components/sidebar/Sidebar'
import { Line } from './components/shared/base/Line'
const App: React.FC = () => {
  return (
    <Line className="App">
      <Sidebar />
      {renderRoutes(routes as any[])}
    </Line>
  )
}

export default App
