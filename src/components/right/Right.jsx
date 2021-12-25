import React from 'react'
import classes from './Right.module.css'
import banner from '../../assets/images/undraw_creativity_re_8grt 1.png'

const Right = () => {
    return (
        <>
            <div className={"container " + classes.header}>
                <button className={'btn shadow-none ' + classes.loginbtn}>Login</button>
                <button className={'btn btn-primary shadow-none ' + classes.signupbtn}>Signup</button>
            </div>
            <div className={"container"}>
                <img src={banner} alt="banner" className={classes.image} />
            </div>   
        </>
    )
}

export default Right
