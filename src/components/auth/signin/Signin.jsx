import { Visibility, VisibilityOff } from '@mui/icons-material'
import React, { useReducer, useState } from 'react'
import classes from './Signin.module.css'
import signupimg from '../../../assets/images/Signup.png'

const signinReducer = (state, action) => {
    if (action.type === "EMAIL_ON_CHANGE") {
        return {
            ...state,
            email: action.payload,
            emailIsValid: action.payload.includes("@"),
            formIsValid: action.payload.includes("@") && state.passwordIsValid
        }
    }
    if (action.type === "PASSWORD_ON_CHANGE") {
        return {
            ...state,
            password: action.payload,
            passwordIsValid: action.payload.trim().length > 6 && /[a-z]/.test(action.payload.trim()) && /[A-Z]/.test(action.payload.trim()) &&
            /[0-9]/.test(action.payload.trim()) && /[^a-zA-Z0-9]/.test(action.payload.trim()),
            formIsValid: state.emailIsValid && action.payload.trim().length > 6 && /[a-z]/.test(action.payload.trim()) && /[A-Z]/.test(action.payload.trim()) &&
            /[0-9]/.test(action.payload.trim()) && /[^a-zA-Z0-9]/.test(action.payload.trim())
        }
    }
    return { email: "", password: "", emailIsValid: null, passwordIsValid: null, formIsValid: null }
}

const Signin = (props) => {
    const initState = {
        email: "",
        password: "",
        emailIsValid: null,
        passwordIsValid: null,
        formIsValid: null
    }
    const [showPass, setShowPass] = useState(false)
    const showPassHandler = () => {
        setShowPass(!showPass)
    }
    const [state, dispatch] = useReducer(signinReducer, initState);
    const emailHandler = (event) => { dispatch({ type: "EMAIL_ON_CHANGE", payload: event.target.value }) }
    const passwordHandler = (event) => { dispatch({ type: "PASSWORD_ON_CHANGE", payload: event.target.value }) }
    const formSubmitHandler = (event) => {
        event.preventDefault()
        if (state.formIsValid) {
            console.log({
                email: state.email,
                password: state.password
            })
        } else {
            console.log("Error occured")
        }
        dispatch({type: "clear"})
    }

    return (
        <>
            {props.display && <div className={'container shadow-lg ' + classes.signin}>
                <h1>Signin</h1>
                <form onSubmit={formSubmitHandler}>
                    <div className={`mb-3 ${state.emailIsValid === false ? classes.invalid : ""} ${state.emailIsValid === true ? classes.valid : ""} `}>
                        <input type="email" className={`form-control`} value={state.email} placeholder='Email address' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={emailHandler} />
                        {state.emailIsValid === false && <span style={{ fontSize: '0.8em', color: 'red' }}>Invalid email! Please include "@"</span>}
                    </div>
                    <div className={`input-group mb-3 ${state.passwordIsValid === false ? classes.invalid : ""} ${state.passwordIsValid === true ? classes.valid : ""}`}>
                        <input type={showPass ? "text" : "password"} className={`form-control`} value={state.password} placeholder="Password" aria-label="Password" aria-describedby="button-addon2" onChange={passwordHandler} />
                        {!showPass && <button className="btn border border-1 shadow-none" type="button" id="button-addon2" onClick={showPassHandler}><Visibility /></button>}
                        {showPass && <button className="btn border border-1 shadow-none" type="button" id="button-addon2" onClick={showPassHandler}><VisibilityOff /></button>}
                    </div>
                    {state.passwordIsValid === false && <span style={{ fontSize: '0.8em', color: 'red' }}>Password should be minimum 6 charachters and it should contain atleast 1 uppercase, 1 lowercase, 1 number and 1 special charachter</span>} <br />
                    <button type="submit" className="btn btn-primary shadow-none"  disabled={!state.formIsValid}>Signin</button> <br /> <br />
                    <span>
                        New to the application? <a href="w" className="link-primary" onClick={(event) => {
                            event.preventDefault();
                            props.onSignup(false)
                        }}>Signup</a> here
                    </span>
                </form>
            </div>}
            {!props.display && <img src={signupimg} alt="" className={classes.signupimg} />}
        </>
    )
}

export default Signin
