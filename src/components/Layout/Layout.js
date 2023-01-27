import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = (props) => {
  console.log(props.children, 'dxa');
  return (
    <>
        <Header />
        <main>{props.children}</main>
        <Footer />
    </>
  )
}

export default Layout
