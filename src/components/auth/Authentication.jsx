import React, { useContext } from 'react'
import AuthContext from '../../store/auth-context'
import classes from './Authentication.module.css'
import Signin from './signin/Signin'
import Signup from './signup/Signup'
const Authentication = () => {
    const ctx = useContext(AuthContext)
    console.log(ctx.status)
    return (
        <div className="container-fluid">
            <div className="row">
                <div className={"col-md-6 align-items-center d-flex " + classes.signin}>
                    <Signin display={ctx.status} onSignup={ctx.updateStatus} />
                </div>
                <div className={"col-md-6 align-items-center d-flex " + classes.signup}>
                    <Signup display={!ctx.status} onSignin={ctx.updateStatus} />
                </div>
            </div>
        </div>
    )
}

export default Authentication
