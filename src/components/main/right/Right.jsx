import React, { useContext } from 'react'
import classes from './Right.module.css'
import banner from '../../../assets/images/undraw_creativity_re_8grt 1.png'
import AuthContext from '../../../store/auth-context'
import { Link } from 'react-router-dom'

const Right = () => {
    const ctx = useContext(AuthContext)
    return (
        <>
            <div className={"container " + classes.header}>
                <Link to="/auth" className={'btn shadow-none ' + classes.loginbtn} onClick={
                    () => {
                        ctx.updateStatus(true)
                    }
                }>Login</Link>
                <Link to="/auth" className={'btn btn-primary shadow-none ' + classes.signupbtn} onClick={
                    () => {
                        ctx.updateStatus(false)
                    }
                }>Signup</Link>
            </div>
            <div className={"container"}>
                <img src={banner} alt="banner" className={classes.image} />
            </div>   
        </>
    )
}

export default Right
