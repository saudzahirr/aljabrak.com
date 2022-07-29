import React from 'react'
import {Header} from './'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    </>
  )
}

export default Layout