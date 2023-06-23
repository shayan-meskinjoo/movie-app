import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='layout'>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
