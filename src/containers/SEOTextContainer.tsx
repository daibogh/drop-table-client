import React from 'react'

const SEOTextContainer = ({
  title,
  description
}: {
  title: string | null | void
  description: string | null | void
}) => {
  return [
    title && <title key='title'>{title}</title>,
    title && <meta key='og:title' property='og:title' content={title} />,
    description && <meta key='description' name='description' content={description} />,
    description && <meta key='og:description' name='og:description' content={description} />
  ]
}

export default SEOTextContainer
