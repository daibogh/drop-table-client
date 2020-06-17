import React from 'react'

export type RouteComponent<T> = React.FC<T> & {
  getInitialData?: any
  model?: any
  renderMetaTags?: any
}

// TODO дописать интерфейсы
export function createPage<T>(component: React.FC<T>, config = {} as any) {
  const page = component as RouteComponent<T>
  page.getInitialData = config.getInitialData
  page.model = config.model
  page.renderMetaTags = config.renderMetaTags

  return page
}
