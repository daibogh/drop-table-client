import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server"
import { matchRoutes, RouteConfig } from "react-router-config"
import { routes } from "../../routes"
import { createStore } from "@reatom/core"
import { preloadData } from "./preloadData"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import React from "react"
import App from "../../App"
import { getPages } from "./getPages"
import { renderMetaTags } from "./renderMetaTags"
import {context as Context} from '@reatom/react'
import path from 'path'

export async function getPageData({ url, context }: any) {
  const extractor = new ChunkExtractor({
    statsFile: path.resolve('build/loadable-stats.json'),
    // razzle client bundle entrypoint is client.js
    entrypoints: ['client'],
  })
  const branch = matchRoutes(routes as RouteConfig[], url)
  const pages = await getPages(branch)

  const storeWithDataPromise = async () => {
    const store = createStore()
    await preloadData(pages, store)
    return store
  }

  const metaTags = await renderMetaTags(pages, url, storeWithDataPromise)
  const store = await storeWithDataPromise()
  const content = await renderToString(
    <ChunkExtractorManager extractor={extractor}>
      <StaticRouter context={context} location={url}>
        <Context.Provider value={store}>
          <App />
        </Context.Provider>
      </StaticRouter>
    </ChunkExtractorManager>,
  )

  const initialState = JSON.stringify(store.getState())

  const scriptTags = extractor.getScriptTags()
  const stylesTags = extractor.getStyleTags()
  console.log({content,
    initialState,
    metaTags,
    stylesTags,
    scriptTags,})
  return {
    content,
    initialState,
    metaTags,
    stylesTags,
    scriptTags,
  }
}