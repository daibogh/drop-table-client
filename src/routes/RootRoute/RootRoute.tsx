import React from 'react'
import loadable from '@loadable/component'
import { createPage } from '../../libs/ssr/createPage'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
// const Header = loadable(() => import('../../components/Header'))
// const Footer = loadable(() => import('../../components/Footer'))

const RootRoute:React.FC = ({children}) => {
  return <>
    <Header/>
    {children}
    <Footer/>
  </>
}

export default createPage(RootRoute, {model: null,getInitialData: null})