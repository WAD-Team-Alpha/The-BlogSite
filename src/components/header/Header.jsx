import { Menu } from "@mui/icons-material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "../../assets/images/logo.jpg";
import Account from "./Account";
import ModalButton from "../NewProfile/Modal/ModalButton";

const Header = (props) => {
    const navigate = useNavigate(); //Header of the website, used to navigate between main page and for navigation
    return (
        <div className={"container-fluid " + classes.appbar}>
            <div className={"container " + classes.content}>
                <button
                    className={"btn shadow-none " + classes.menuicon}
                    onClick={props.nav}
                >
                    <Menu />
                </button>
                <Link
                    to={"/"}
                    className={"btn shadow-none " + classes.logo}
                    onClick={(event) => {
                        event.preventDefault();
                        navigate("/", { replace: true });
                    }}
                >
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className={classes.seperator}></div>
                <>
                    <ModalButton />
                    <Account />
                </>
                <Link
                    to="/auth?code=signin&main=true"
                    className={"btn shadow-none "}
                >
                    Login
                </Link>
        </div>
    );
};

export default Header;
