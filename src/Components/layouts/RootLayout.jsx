import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import { Children } from 'react'


const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default RootLayout