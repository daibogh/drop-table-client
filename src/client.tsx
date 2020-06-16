import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'
OfflinePluginRuntime.install()
import App from './App'
import { createStore } from '@reatom/core'
import { connectReduxDevtools } from '@reatom/debug'
import { context } from '@reatom/react'

export const store = createStore((window as any).__INITIAL_STATE__)

// connectReduxDevtools(store)

hydrate(
  <BrowserRouter>
    <context.Provider value={store}>
      <App />
    </context.Provider>
  </BrowserRouter>,
  document.getElementById('root'),
)

if (module.hot) {
  module.hot.accept()
}