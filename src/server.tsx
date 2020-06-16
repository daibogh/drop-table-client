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
const server = express()
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST!)
server
  .disable('x-powered-by')
  .use(compression())
  .use(createLocaleMiddleware())
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get('/*', async (req, res) => {
    // We create an extractor from the statsFile
    const extractor = new ChunkExtractor({
      statsFile: path.resolve('build/loadable-stats.json'),
      // razzle client bundle entrypoint is client.js
      entrypoints: ['client'],
    })
    const context = {}
    const markup = renderToString(
      <StaticRouter location={req.url} context={context}>
        <ChunkExtractorManager extractor={extractor}>
          <App />
        </ChunkExtractorManager>
      </StaticRouter>
    )

    // collect script tags
    const scriptTags = extractor.getScriptTags()

    // collect 'preload/prefetch' links
    const linkTags = extractor.getLinkTags()

    // collect style tags
    const styleTags = extractor.getStyleTags()

    // console.log({ linkTags })

    res.send(
      // prettier-ignore
      `<!doctype html>
<html lang='${(req as any).locale}'>
  <head>
      <meta http-equiv='X-UA-Compatible' content='IE=edge' />
      <meta charSet='utf-8' />
      <title>Welcome to Razzle</title>
      <meta name='viewport' content='width=device-width, initial-scale=1'>
      ${linkTags}
      ${styleTags}
      ${assets.client.css
    ? `<link rel="stylesheet" href="${assets.client.css}">`
    : ''}
  </head>
  <body>
      <div id='root'>${markup}</div>
      ${scriptTags}
  </body>
</html>`
    )
  })

export default server
