import { Menu } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'
import logo from '../../assets/images/logo.jpg'
import Account from './Account'

const Header = (props) => {
    return (
        <div className={'container-fluid ' + classes.appbar}>
            <div className={"container " + classes.content}>
                <button className={'btn shadow-none ' + classes.menuicon} onClick={props.nav}>
                    <Menu />
                </button>
                <Link to={"/"} className={'btn shadow-none ' + classes.logo}>
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className={classes.seperator}></div>
            <Account />
        </div>
    )
}

export default Header
