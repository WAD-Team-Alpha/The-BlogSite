import React, { useState } from "react";
import classes from "./css/signup.module.css";
import { login } from "../requests/admin.requests";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const [submit, setSubmit] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const formSubmitHandler = async (event) => {
        event.preventDefault();
        console.log("this is running");
        setSubmit(true);
        if (password !== "" && email !== "") {
            const response = await login(email, password);
            console.log(response);
            if (response.status === true) {
                navigate("/admin/users", { replace: true });
            } else {
                setSubmit(false);
            }
        }
    };
    return (
        <div>
            <form className={classes.form} onSubmit={formSubmitHandler}>
                <h3 style={{ paddingLeft: "10em" }}>
                    <b>Sign In</b>
                </h3>
                <br />
                <div className="form-group">
                    <label className={classes.labels}>Email address</label>
                    <br />
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        defaultValue={email}
                        onChange={(e)=>{
                          setEmail(e.target.value)
                        }}
                    />
                    <br />
                </div>
                <div className="form-group">
                    <label className={classes.labels}>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        defaultValue={password}
                        onChange={(e)=>{
                          setPassword(e.target.value)
                        }}
                    />
                </div>
                <br />
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                            style={{ color: "black" }}
                        >
                            See Password
                        </label>
                    </div>
                </div>
                <br />
                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    style={{ marginBottom: "1em" }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default SignUp;
