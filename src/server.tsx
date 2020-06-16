/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import App from './App'
import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'
import path from 'path'
import { StaticRouter } from 'react-router-dom'
import compression from 'compression'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import createLocaleMiddleware from 'express-locale'
import { getPageData } from './libs/ssr/getPageData'
const server = express()
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST!)
server
  .disable('x-powered-by')
  .use(compression())
  .use(createLocaleMiddleware())
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get('/*', async (req, res) => {
    type Req = typeof req & {currentUser: any; pfgApi: any}
    // We create an extractor from the statsFile
    const extractor = new ChunkExtractor({
      statsFile: path.resolve('build/loadable-stats.json'),
      // razzle client bundle entrypoint is client.js
      entrypoints: ['client'],
    })
    const context = {} as any
    const {
      content,
      initialState,
      metaTags,
      stylesTags,
      scriptTags,
    } = await getPageData({
      url: req.url,
      context
    })
    // const markup = renderToString(
    //   <StaticRouter location={req.url} context={context}>
    //     <ChunkExtractorManager extractor={extractor}>
    //       <App />
    //     </ChunkExtractorManager>
    //   </StaticRouter>
    // )

    // // collect script tags
    // const scriptTags = extractor.getScriptTags()

    // // collect 'preload/prefetch' links
    // const linkTags = extractor.getLinkTags()

    // // collect style tags
    // const styleTags = extractor.getStyleTags()

    // // console.log({ linkTags })

    res.send(
      // prettier-ignore
      `<!doctype html>
      <html lang="en">
        <head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta charset="utf-8" />
          <title>Welcome to Razzle</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          ${metaTags}
          ${stylesTags}
        </head>
        <body>
          <div id="root">${content}</div>
          <script>window.__INITIAL_STATE__ = ${initialState}</script>
       ${scriptTags}
        </body>
      </html>  `
    )
  })

export default server
