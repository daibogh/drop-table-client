import React, { useEffect } from 'react'
import loadable from '@loadable/component'
import './App.scss'
import { createStore } from '@reatom/core'
import { context } from '@reatom/react'
import { connectReduxDevtools } from '@reatom/debug'
import { renderRoutes } from 'react-router-config'
import { routes } from './routes'
const Header = loadable(() => import('./components/Header'))
const Footer = loadable(() => import('./components/Footer'))


const App: React.FC = () => {
  // create stateful context for atoms execution
  const store = createStore()
  useEffect(() => connectReduxDevtools(store), [])
  return (
    <context.Provider value={store}>
      <Header />
      {renderRoutes(routes)}
      <Footer />
    </context.Provider>
  )
}

export default App
