import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Navigation from '../components/navigation/Navigation'

const HomeLayout = () => {
    const [nav, setNav] = useState(false);
    const navHandler = () => {
        nav ? setNav(false) : setNav(true)
    }
    return (
        <div>
            {!nav && <Header nav={navHandler}   />}
            {nav && <Navigation nav={navHandler} />}
            <div className="left"></div>
            <div className="middle">
                {!nav && <Outlet />}
            </div>
            <div className="right"></div>
        </div>
    )
}

export default HomeLayout
