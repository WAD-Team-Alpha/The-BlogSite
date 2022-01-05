import { motion } from 'framer-motion';
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
    const mainVarient = {
        hidden: {
            opacity: 0,
            x: '100vw'
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            },
        },
        exit: {
            x: '100vw',
            transition: {
                ease: 'easeInOut'
            },
        }
    }
    return (
        authStatus.isAuthenticated ?
            <>
                {!nav && <Header nav={navHandler} />}
                {nav && <Navigation nav={navHandler} />}
                <motion.div variants={mainVarient} initial='hidden' animate='visible' exit='exit'>
                    {!nav && <Outlet />}
                </motion.div>
            </> : <RestrictedAccess />
    );
}

export default Layout
