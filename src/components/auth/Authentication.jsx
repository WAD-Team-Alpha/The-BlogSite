import React, { useState } from 'react'
import classes from './Authentication.module.css'
import Signin from './signin/Signin'
import Signup from './signup/Signup'
const Authentication = () => {
    const [display, setDisplay] = useState(true)
    const displayHandler = (event) => {
        event.preventDefault()
        setDisplay(!display)
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className={"col-md-6 align-items-center d-flex " + classes.signin }>
                    <Signin display={display} onSignup={displayHandler} />
                </div>
                <div className={"col-md-6 align-items-center d-flex " + classes.signup }>
                    <Signup display={!display} onSignin={displayHandler} />
                </div>
            </div>
        </div>
    )
}

export default Authentication
