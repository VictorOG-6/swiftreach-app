import React from 'react'
import { Navbar } from './components'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <main className='w-screen h-screen overflow-hidden flex justify-center'>{children}</main>
    </div>    
  )
}

export default Layout