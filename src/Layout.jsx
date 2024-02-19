// import React from 'react'
import Header from './components/header/Header'; // Fix the casing of the import statement

import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
        <Header/>
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout