import React from 'react'
import loadable from '@loadable/component'
import './App.scss'
import { createStore } from '@reatom/core'
import { context } from '@reatom/react'
const Header = loadable(() => import('./components/Header'))
const Body = loadable(() => import('./Body'))
const Footer = loadable(() => import('./components/Footer'))

const App: React.FC = () => {
  // create stateful context for atoms execution
  const store = createStore()
  return (
    <context.Provider value={store}>
      <div>
        <h3>Welcome to the Razzle</h3>
        <Header />
        <Body />
        <Footer />
      </div>
    </context.Provider>
  )
}

export default App
