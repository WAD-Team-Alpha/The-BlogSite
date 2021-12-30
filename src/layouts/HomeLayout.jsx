import React, { useState } from 'react'
import Header from '../components/header/Header'
import classes from './Layout.module.css'
import Navigation from '../components/navigation/Navigation'

const HomeLayout = () => {
    const [nav, setNav] = useState(false);
    const navHandler = () => {
        nav ? setNav(false) : setNav(true)
    }
    return (
        <>
            {!nav && <Header nav={navHandler} />}
            {nav && <Navigation nav={navHandler} />}
            {!nav && <>
                <div className={"container-fluid " + classes.content}>
                    <div className="row">
                        <div className={"col-md-2 " + classes.leftpane}>
                            {/* Left panel goes here */}
                        </div>
                        <div className={"col-md-7 " + classes.middlepane}>
                            {/* Middele panel goes here */}
                        </div>
                        <div className={"col-md-3 " + classes.rightpane}>
                            {/* Right panel goes here */}
                        </div>
                    </div>
                </div>
            </>}
        </>
    )
}

export default HomeLayout
