import React, { useState } from "react";
import Header from "../components/header/Header";
import classes from "./Layout.module.css";
import Navigation from "../components/navigation/Navigation";
import Left from "../components/home/left";
import Right from "../components/home/right";
import { Outlet } from "react-router-dom";
import RestrictedAccess from "./RestrictedAccess";
const HomeLayout = () => {
    // Home layout
    const [nav, setNav] = useState(false); //Navigation state
    const navHandler = () => {
        nav ? setNav(false) : setNav(true);
    };
    return <div className={"container-fluid " + classes.content}>
        <Header/>
    <div className="row">
        <div
            className={
                "col-md-2 shadow-lg " + classes.leftpane
            }
        >
            <Left />
        </div>
        <div className={"col-md-7 " + classes.middlepane}>
            {<Outlet />}
        </div>
        <div
            className={
                "col-md-3 shadow-lg " + classes.rightpane
            }
        >
            <Right />
        </div>
    </div>
</div>
};

export default HomeLayout;
