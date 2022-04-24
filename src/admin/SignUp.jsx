import React from "react";
import classes from "./css/signup.module.css";

const SignUp = () => {
  return (
    <div>
    <form className={classes.form}>
      <h3 style={{paddingLeft : "10em"}}><b>Sign In</b></h3>
      <br/>
      <div className="form-group">
        <label className={classes.labels}>Email address</label>
        <br/>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
        <br/>
      </div>
      <div className="form-group">
        <label className={classes.labels}>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <br/>
      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1" style={{color: "black"}}>
               See Password 
          </label>
        </div>
      </div>
      <br/>
      <button type="submit" className="btn btn-primary btn-block" style={{marginBottom: "1em"}}>
        Submit
      </button>
      
    </form>
    </div>
  );
};

export default SignUp;
