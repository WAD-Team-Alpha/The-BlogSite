import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header'
import Navigation from '../components/navigation/Navigation';
import RestrictedAccess from './RestrictedAccess';

const Layout = (props) => {
    const [nav, setNav] = useState(false);
    const navHandler = () => {
        nav ? setNav(false) : setNav(true)
    }
    const authStatus = useSelector((state) => state.auth);
    return (
        authStatus.isAuthenticated ?
        <>
            {!nav && <Header nav={navHandler} />}
            {nav && <Navigation nav={navHandler} />}
            {!nav && <Outlet />}
        </> : <RestrictedAccess />
    );
}

export default Layout
