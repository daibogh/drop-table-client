import express from 'express'
import compression from 'compression'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import createLocaleMiddleware from 'express-locale'
import { getPageData } from './libs/ssr/getPageData'
const server = express()
server
  .disable('x-powered-by')
  .use(compression())
  .use(createLocaleMiddleware())
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get('/*', async (req, res) => {
    res.set('Cache-Control', 'public, max-age=31557600')
    const context = {} as any
    const {
      content,
      initialState,
      metaTags,
      stylesTags,
      scriptTags,
    } = await getPageData({
      url: req.url,
      context,
    })
    // console.log({content,
    //   initialState,
    //   metaTags,
    //   stylesTags,
    //   scriptTags,})
    res.send(
      `<!doctype html>
      <html lang="en">
        <head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta charset="utf-8" />
          <link rel="icon" href="img/favicon64.png" type="image/x-icon">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="manifest" href="manifest.json">
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
