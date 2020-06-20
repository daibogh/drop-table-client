import React from 'react'

import { renderRoutes } from 'react-router-config'
import { routes } from './routes'
import { Sidebar } from './components/sidebar/Sidebar'
import { Line } from './components/shared/base/Line'
import './App.scss'

const App: React.FC = () => {
  return (
    <Line w='100' className="App">
      <Sidebar />
      {renderRoutes(routes as any[])}
    </Line>
  )
}

export default App
