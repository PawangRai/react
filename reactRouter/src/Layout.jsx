import React from 'react'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

// We need our header and footer on each component, in home, about, contact, etc. What we can do is add the header and footer in each component. But a more optimized approach is to use Outlet from react-router-dom. This Outlet will allow us to dynamically add content to our component, keeping Header and Footer the same. Wherever we have added Outlet, our content will replace it keeping Header and Foot the same. 
function Layout() {
  return (
    <>
    {/* Header will remain same  */}
    <Header /> 
    {/* Outlet will change depending on what we have passed inside it. */}
    <Outlet />
    {/* Footer will remain same */}
    <Footer />
    </>
  )
}

export default Layout
