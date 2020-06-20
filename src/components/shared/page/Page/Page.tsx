import React from 'react'
import { Line } from '../../base/Line'

import './Page.scss'

interface PageProps {
  title: string
}

const Page: React.FunctionComponent<PageProps> = ({ title, children }) => {
  return (
    <Line p='2' vertical className="Page">
      <Line className="title">{title}</Line>
      <Line mt='2'>{children}</Line>
    </Line>
  )
}

export default Page
