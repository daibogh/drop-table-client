import React from 'react'
import loadable from '@loadable/component'
import { createPage } from '../../libs/ssr/createPage'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
import { rootAtom } from './RootRoute.model'
import { Line } from '~/components/shared/base/Line'
// const Header = loadable(() => import('../../components/Header'))
// const Footer = loadable(() => import('../../components/Footer'))

const RootRoute: React.FC<RouteConfigComponentProps<any>> = ({ route }) => (
  <Line w="100">
    {/* child routes won't render without this */}
    {renderRoutes(route?.routes)}
  </Line>
)

export default createPage(RootRoute, { model: rootAtom, getInitialData: null })
