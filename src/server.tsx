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
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

<!-- JS, Popper.js, and jQuery -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
          ${metaTags}
          ${stylesTags}
        </head>
        <body><div id="root">${content}</div><script>window.__INITIAL_STATE__ = ${initialState}</script>${scriptTags}</body>
      </html>  `
    )
  })

export default server
