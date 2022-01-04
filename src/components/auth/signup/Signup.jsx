import { Visibility, VisibilityOff } from '@mui/icons-material'
import React, { useContext, useState } from 'react'
import classes from './Signup.module.css'
import signinimg from '../../../assets/images/Signin.png'
import { useReducer } from 'react'
import { signupAction } from "../../../store/auth-actions";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../../store/auth-context'
// import { authActions } from "./store/auth";
const signupReducer = (state, action) => {

    if (action.type === "EMAIL") {
        return {
            ...state,
            email: action.payload,
            emailIsValid: action.payload.includes("@"),
            formIsValid: !state.firstNameIsEmpty && !state.lastNameIsEmpty && action.payload.includes("@") &&
                state.passwordIsValid && state.passwordIsMatching
        }
    }
    if (action.type === "PASSWORD") {
        const passValid = action.payload.trim().length > 6 && /[a-z]/.test(action.payload.trim()) && /[A-Z]/.test(action.payload.trim()) &&
            /[0-9]/.test(action.payload.trim()) && /[^a-zA-Z0-9]/.test(action.payload.trim())
        const formValid = !state.firstNameIsEmpty && !state.lastNameIsEmpty && state.emailIsValid && passValid && action.payload === state.confirmPassword
        return {
            ...state,
            password: action.payload,
            passwordIsValid: passValid,
            formIsValid: formValid,
            passwordIsMatching: passValid && action.payload === state.confirmPassword,
        }
    }
    if (action.type === "CONFIRM_PASSWORD") {
        return {
            ...state,
            confirmPassword: action.payload,
            passwordIsMatching: state.passwordIsValid && action.payload === state.password,
            formIsValid: !state.firstNameIsEmpty && !state.lastNameIsEmpty && state.emailIsValid &&
                state.passwordIsValid && action.payload === state.password
        }
    }
    if (action.type === "FIRSTNAME") {
        return {
            ...state,
            firstname: action.payload,
            firstNameIsEmpty: !action.payload.trim().length > 0,
            formIsValid: action.payload.trim().length > 0 && !state.lastNameIsEmpty && state.emailIsValid &&
                state.passwordIsValid && state.passwordIsMatching
        }
    }
    if (action.type === "LASTNAME") {
        return {
            ...state,
            lastname: action.payload,
            lastNameIsEmpty: !action.payload.trim().length > 0,
            formIsValid: !state.firstNameIsEmpty && action.payload.trim().length > 0 && state.emailIsValid &&
                state.passwordIsValid && state.passwordIsMatching
        }
    }
    return {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        firstNameIsEmpty: null,
        lastNameIsEmpty: null,
        emailIsValid: null,
        passwordIsValid: null,
        passwordsIsMatching: null,
        formIsValid: null,
    }
}

const Signup = (props) => {
    const ctx = useContext(AuthContext)
    const navigate = useNavigate();
    const dispatchAction = useDispatch();
    const initState = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        firstNameIsEmpty: null,
        lastNameIsEmpty: null,
        emailIsValid: null,
        passwordIsValid: null,
        passwordsIsMatching: null,
        formIsValid: null,
    }
    const [showPass, setShowPass] = useState(false)
    const showPassHandler = () => {
        setShowPass(!showPass)
    }
    const [state, dispatch] = useReducer(signupReducer, initState)

    const firstNameHandler = (event) => dispatch({ type: "FIRSTNAME", payload: event.target.value })
    const lastNameHandler = (event) => dispatch({ type: "LASTNAME", payload: event.target.value })
    const emailHandler = (event) => dispatch({ type: "EMAIL", payload: event.target.value })
    const passwordHandler = (event) => dispatch({ type: "PASSWORD", payload: event.target.value })
    const confirmPasswordHandler = (event) => dispatch({ type: "CONFIRM_PASSWORD", payload: event.target.value })
    const formSubmitHandler = (event) => {
        event.preventDefault()
        if (state.formIsValid) {
            console.log(
                {
                    firstname: state.firstname,
                    lastname: state.lastname,
                    email: state.email,
                    password: state.password
                }
            )
            ctx.updateSubmitted(true)
            dispatchAction(signupAction(state.email, state.password, state.firstname, state.lastname)).then((res)=>{
                if (res === "success") {
                    ctx.updateSubmitted(false)
                    navigate("/home/post", {replace: true})

                }
            });
            dispatch({ type: "clear" })
        } else {
            console.log("Some error occured")
        }
    }

    return (
        <>
            {props.display && <div className={'container shadow-lg ' + classes.signup}>
                <h1>Signup</h1>
                <form onSubmit={formSubmitHandler}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className={`mb-3 ${state.firstNameIsEmpty === true ? classes.invalid : ""} ${state.firstNameIsEmpty === false ? classes.valid : ""}`}>
                                <input type="text" className="form-control" placeholder='Firstname' value={state.firstname} onChange={firstNameHandler} required />
                                {state.firstNameIsEmpty === true && <span style={{ fontSize: '0.8em', color: 'red' }}>This is a required field</span>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`mb-3 ${state.lastNameIsEmpty === true ? classes.invalid : ""} ${state.lastNameIsEmpty === false ? classes.valid : ""}`}>
                                <input type="text" className="form-control" placeholder='Lastname' value={state.lastname} onChange={lastNameHandler} required />
                                {state.lastNameIsEmpty === true && <span style={{ fontSize: '0.8em', color: 'red' }}>This is a required field</span>}
                            </div>
                        </div>
                        <div className={`mb-3 ${state.emailIsValid === false ? classes.invalid : ""} ${state.emailIsValid === true ? classes.valid : ""}`}>
                            <input type="email" className="form-control" placeholder='Email address' value={state.email} onChange={emailHandler} required />
                            {state.emailIsValid === false && <span style={{ fontSize: '0.8em', color: 'red' }}>Invalid Email Address</span>}
                        </div>
                        <div className={`mb-3 ${state.passwordIsValid === false ? classes.invalid : ""} ${state.passwordIsValid === true ? classes.valid : ""} `} >
                            <input type={showPass ? "text" : "password"} className="form-control" placeholder="Password" value={state.password} onChange={passwordHandler} aria-label="Password" aria-describedby="button-addon2" required />
                            {state.passwordIsValid === false && <span style={{ fontSize: '0.8em', color: 'red' }}>Password should be minimum 6 charachters and it should contain atleast 1 uppercase, 1 lowercase, 1 number and 1 special charachter</span>}
                        </div>
                        <div className={`input-group mb-3 ${state.passwordIsMatching === false ? classes.invalid : ""} ${state.passwordIsMatching === true ? classes.valid : ""} `}>
                            <input type={showPass ? "text" : "password"} className="form-control" placeholder="Confirm Password" value={state.confirmPassword} onChange={confirmPasswordHandler} aria-label="Password" aria-describedby="button-addon3" required />
                            {!showPass && <button className="btn border border-1 shadow-none" type="button" id="button-addon2" onClick={showPassHandler}><Visibility /></button>}
                            {showPass && <button className="btn border border-1 shadow-none" type="button" id="button-addon2" onClick={showPassHandler}><VisibilityOff /></button>}
                        </div>
                        {state.passwordIsMatching === false && <span style={{ fontSize: '0.8em', color: 'red' }}>Passwords are not matching</span>}
                        <div className="mb-3">
                            <button type="submit" className={"btn btn-primary shadow-none"} disabled={!state.formIsValid}>Signup</button>
                        </div>
                        <span>
                            Already have an account? <a href="w" className="link-primary" onClick={(event) => {
                                event.preventDefault();
                                props.onSignin(true)
                            }}>Signin</a> here
                        </span>
                    </div>
                </form>
            </div>}
            {!props.display && <img src={signinimg} alt="" className={classes.signinimg} />}
        </>
    )
}

export default Signup
