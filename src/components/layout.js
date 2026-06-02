import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import PageTop from "./pagetop"
import Menu from "./menu"

import "../styles/all.scss"

const Layout = (props) => {
  
  return (
    <>
      <Menu />
      <Header />
      <main>{props.children}</main>
      <Footer isShortMode={props.hideContact} />
      <PageTop showBelow={50} />
      
    </>
  )
}

export default Layout