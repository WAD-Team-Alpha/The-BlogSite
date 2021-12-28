import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation';

const Layout = (props) => {
    const [nav, setNav] = useState(false);
    const navHandler = () => {
        nav ? setNav(false) : setNav(true)
    }
    return (
        <>
            {!nav && <Header nav={navHandler} />}
            {nav && <Navigation nav={navHandler} />}
            {!nav && <Outlet />}
        </>
    );
}

export default Layout
