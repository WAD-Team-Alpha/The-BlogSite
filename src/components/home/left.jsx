import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './left.module.css'
const Left = () => {
    const classname = (navData) => navData.isActive ? `fw-bold fs-8 ${classes.active}` : `fw-bold fs-8`
    return (
        <div>
            <ul className={`${classes.list}`}>
                <li><NavLink to={"/post"} className={classname}>Posts</NavLink></li>
                <li><NavLink to={"/question"} className={classname}>Forums</NavLink></li>
                <li><NavLink to={"/recents"} className={classname}>Recent Activity</NavLink></li>
                <li><NavLink to={"/saved"} className={classname}>Saved for Later</NavLink></li>
            </ul>
        </div>
    );
}

export default Left;