import React, { useEffect } from 'react'
import loadable from '@loadable/component'
import './App.scss'
import { createStore } from '@reatom/core'
import { context } from '@reatom/react'
import { connectReduxDevtools } from '@reatom/debug'
import { renderRoutes } from 'react-router-config'
import { routes } from './routes'
import Header from './components/Header'
import Footer from './components/Footer'


const App: React.FC = () => {
  return (
    <>
      <Header />
      {renderRoutes(routes as any[])}
      <Footer />
    </>
  )
}

export default App
