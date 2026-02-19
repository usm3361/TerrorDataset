import React from 'react'
import Navbar from '../components/Navbar.home'
import Rows from '../components/Rows.home'
import Footer from '../components/Footer.home'

const DataPage = () => {
  return (
    <div className='homePage'>
          <h1 className='titlePage'>Terror Data System</h1>
          <Navbar />
          <Rows />
          <Footer />
    </div>
  )
}

export default DataPage
