import React, { useState } from 'react'
import Header from '../components/header/Header'
import classes from './Layout.module.css'
import Navigation from '../components/navigation/Navigation'
import Left from '../components/home/left'
import Right from '../components/home/right'
import {Outlet} from 'react-router-dom'
import { useSelector } from 'react-redux'
import RestrictedAccess from './RestrictedAccess'
const HomeLayout = () => {
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
            {!nav && <>
                <div className={"container-fluid " + classes.content}>
                    <div className="row">
                        <div className={"col-md-2 " + classes.leftpane}>
                           <Left/>
                        </div>
                        <div className={"col-md-7 " + classes.middlepane}>
                           {<Outlet />}
                        </div>
                        <div className={"col-md-3 " + classes.rightpane}>
                           <Right/>
                        </div>
                    </div>
                </div>
            </>}
        </> : <RestrictedAccess />
    )
}

export default HomeLayout
