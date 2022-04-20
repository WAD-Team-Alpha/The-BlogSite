import React from "react";
import classes from "./Right.module.css";
import banner from "../../../assets/images/undraw_creativity_re_8grt 1.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Right = () => {
    return (
        <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 2, bounce: 0.4 }}
        >
            {localStorage.getItem('authStatus') === "false"?
                <div className={"container " + classes.header}>
                    {/* Login button */}
                    <Link
                        to="/auth?code=signin&main=true"
                        className={"btn shadow-none " + classes.loginbtn}
                    >
                        Login
                    </Link>
                    {/* Signup button */}
                    <Link
                        to="/auth?code=signup&main=true"
                        className={
                            "btn btn-primary shadow-none " + classes.signupbtn
                        }
                    >
                        Signup
                    </Link>
                </div>
                :
                <div className={"container " + classes.header}>
                    <Link
                        to="/home/post"
                        className={"btn shadow-none " + classes.signupbtn}
                    >
                        Dashboard
                    </Link>
                </div>
        }
            <div className={"container"}>
                <img src={banner} alt="banner" className={classes.image} />
            </div>
        </motion.div>
    );
};

export default Right;
