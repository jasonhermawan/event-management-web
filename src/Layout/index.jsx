import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './layout.css'

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div className="container">
        {props.children}
      </div>
      <Footer />
    </>
  )
}

export default Layout