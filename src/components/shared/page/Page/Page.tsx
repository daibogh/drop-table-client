import React from 'react'
import { Line } from '../../base/Line'

import './Page.scss'

interface PageProps {
  title: string
}

const Page: React.FunctionComponent<PageProps> = ({ title, children }) => {
  return (
    <Line className="Page" vertical>
      <Line className="title">{title}</Line>
      {children}
    </Line>
  )
}

export default Page
