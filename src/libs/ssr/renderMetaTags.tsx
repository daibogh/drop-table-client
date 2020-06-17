import React from 'react'

import { HelmetProvider } from 'react-helmet-async'
import { renderToString } from 'react-dom/server'

export async function renderMetaTags(
  pages: any[],
  currentUrl: any,
  storeReadyPromise: any
) {
  const helmetContext = {} as any
  return Promise.all(
    pages
      .map(([component]) => component)
      .filter((page) => typeof page.renderMetaTags === 'function')
      .map(
        async (page) => await page.renderMetaTags(currentUrl, storeReadyPromise)
      )
  )
    .then((tagsByPages) =>
      renderToString(
        <HelmetProvider context={helmetContext}>{tagsByPages}</HelmetProvider>
      )
    )
    .then(() => {
      const { helmet } = helmetContext
      if (!helmet) return ''
      return `${helmet.title.toString()} ${helmet.meta.toString()}`
    })
}
